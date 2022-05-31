import { FC, useRef, useState } from "react";
import Locations from "../../../../components/locations";
import { artes } from "../includes/artes";
import { Form, Formik, useFormik } from "formik";
import { sweetAlert } from "../../../../components/alert/sweetAlert";
import { useMutation } from "@apollo/client";
import { UploadFile } from "../../../../utils/uploadFile";
import { CREATE_EVOUCHER_BESPOKE } from "../../../../graphql/BeSpoke";
import SubmitButton from "../../../../components/forms_v2/Submit";
import { validationForm } from "../includes/validationForm";
import ReCAPTCHA from "react-google-recaptcha";
import {
  FormikTextInput,
  InformationCheckBox,
  PrivacyCheckBox,
  TermsCheckBox,
} from "../../../../components/forms_v2/Inputs";
import { getCity, getDistrict, getState } from "../../../../utils/locations";

const FormBespoke: FC = () => {
  const artRef = useRef<HTMLSelectElement>(null);
  const recaptcha = useRef<any>(null);
  const imageRef = useRef<any>(null);

  const [loading, setLoading] = useState(false);
  const [errorImagen, setErrorImagen] = useState(false);

  const [art, setArt] = useState({
    ...artes[0],
  });

  const [createUser] = useMutation(CREATE_EVOUCHER_BESPOKE, {
    onError(error) {
      if (error.networkError) {
        sweetAlert("error", "Hubo un error", "");
      } else {
        sweetAlert("error", "No se registro", error.message);
      }
    },
  });

//   const { Locationjsx, city, district, state, error } = Locations();
  // console.log({city, district, state});
  const handleChange = () => {
    // formik.handleChange;
    if (null !== artRef.current) {
      const index = artRef.current.value;
      const selected = artes.filter((arte) => arte.id === index)[0];

      setArt({
        ...selected,
      });
    }
  };

  return (
    <div className="form-bespoke">
      <Formik
        initialValues={{
          voucher: "",
          name: "",
          lastname: "",
          email: "",
          dni: "",
          phone: "",
          terms: false,
          privacy: false,
          marketingOption: false,
          state: "",
            city: "",
            district: "",
        }}
        validationSchema={validationForm}
        onSubmit={async (values, { resetForm }) => {
                // return console.log(values);
                const {imagenUrl, uploadError} = await UploadFile(imageRef.current.files);
                console.log({imagenUrl, uploadError})
                if (uploadError){ return setErrorImagen(true);}else{ setErrorImagen(false)}
                
                
         
              setLoading(true);
              try {
                // const validRecaptcha = await recaptcha.current.execute();
                // if (!validRecaptcha) return setLoading(false);
        
                const response = await createUser({ variables: { ...values, image: imagenUrl, art: art.name } });
        
                if (response.data?.addEvoucherBespoke) {
                  resetForm();
                  setLoading(false);
        
                  window.location.href = "https://samsung.com.pe/thank-you-bespoke-registro/";
                }
                // console.log(data)
                setLoading(false);
              } catch (error) {
                console.log(error)
                setLoading(false)
              }
              console.log({...values,image: imagenUrl,   art: art.name});
              setLoading(false);
        }}
      >
        {(formik) => (
          <Form>
            <div className="input--container">
              <FormikTextInput
                label="Nro de Comprobante de Pago (*)"
                name="voucher"
                type="text"
              />
              <FormikTextInput label="Nombre (*)" name="name" type="text" />

              <FormikTextInput
                label="Apellidos (*)"
                name="lastname"
                type="text"
              />
              <FormikTextInput
                label="DNI / Carnet de extranjería (*)"
                name="dni"
                type="text"
              />
              <FormikTextInput
                label="Correo Electrónico (*)"
                name="email"
                type="text"
              />
              <FormikTextInput
                label="Número de contacto (*)"
                name="phone"
                type="text"
              />
              <Locations />
              <div className="ch-ff__field fileUploader" >
            <label htmlFor="product">Adjunta tu Boleta (*)</label>
            <input ref={imageRef} type="file" accept=".jpg, .jpeg, .png, .pdf, .tif, .bmp"  
              // onChange={(e)=> handleImage(e)} 
              required
              />
            <p className={errorImagen ? 'img-info input---error': 'img-info'}>*Solo se podrá adjuntar un archivo con peso menor a 5MB.</p>
            <p className={errorImagen ? 'img-info input---error': 'img-info'}>*El documento cargado debe ser legible para su validación.</p>
            <p className={errorImagen ? 'img-info input---error': 'img-info'}>*Formatos válidos JPG, PNG, BMP, TIF, PDF.</p>
          </div>
          <div className="ch-ff__field">
            <label htmlFor="art">Selecciona tu diseño (*)</label>
            <select
              ref={artRef}
              name="art"
              id="art"
              defaultValue="0"
              onChange={handleChange}
            >
              <option value="1" disabled>
                Selecciona
              </option>
              {artes.map((arte, index) => (
                <option key={index} value={arte.id}>
                  {arte.name}
                </option>
              ))}
            </select>
            
          </div>
          <div></div>
            </div>
            <div className="img-container">
              <img src={art.img} alt={art.alt} />
            </div>
            <div className="checkboxes">
              <PrivacyCheckBox label="PrivacyPolicy" name="privacy" />
              <TermsCheckBox label="Terms and Conditions" name="terms" />
              <InformationCheckBox
                label="Deseo recibir información de Samsung"
                name="marketingOption"
              />
            </div>
            <SubmitButton loading={loading} value={"PRE-REGÍSTRATE"} />
          </Form>
        )}
      </Formik>
    </div>
  );
};
export default FormBespoke;
