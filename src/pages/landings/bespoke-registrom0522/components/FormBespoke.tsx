import { FC, useRef, useState } from "react";
import Locations from "../../../../components/locations";
import { artes } from "../includes/artes";
import { useFormik } from "formik";
import * as Yup from "yup";
import { isNumber } from "../../../../utils/isNumber";
import { sweetAlert } from "../../../../components/alert/sweetAlert";
import { useMutation } from "@apollo/client";
import { UploadFile } from "../../../../utils/uploadFile";
import { CREATE_EVOUCHER_BESPOKE } from "../../../../graphql/BeSpoke";
import SubmitButton from "../../../../components/forms_v2/Submit";

const FormBespoke: FC = () => {
  const artRef = useRef<HTMLSelectElement>(null);
  const imageRef = useRef<any>(null);
  const [privacy, setPrivacy] = useState(false);
  const [terms, setTerms] = useState(false);
  const [information, setInformation] = useState(false);
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


  // const { Locationjsx, city, district, state, error } = Locations();
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

  const formik = useFormik({
    initialValues: {
      name: "",
      lastname: "",
      voucher: "",
      email: "",
      dni: "",
      phone: "",
      state: "",
      city: "",
      district: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .required("El email es obligatorio")
        .email("Email ingresado no valido"),
      name: Yup.string().required("El nombre es obligatorio"),
      lastname: Yup.string().required("El apellido es obligatorio"),
      voucher: Yup.string().required("El comprobante es obligatorio"),
      dni: Yup.string()
        .required("El DNI es obligatorio")
        .matches(isNumber, "DNI no v??lido")
        .min(8, "Debe tener m??nimo 8 digitos")
        .max(10, " Debe tener m??ximo 10 digitos"),
      phone: Yup.string()
        .required("El celular es obligatorio")
        .matches(isNumber, "Tel??fono no v??lido")
        .min(9, "Debe tener 9 digitos")
        .max(9, "Debe tener 9 digitos"),
    }),
    onSubmit: async (values, { resetForm }) => {

      // if(city==='' || district==='' || state==='' ) {
      //   return error(true);
      // } else{
      //   error(false);
      // }
    
      if (privacy === false || terms === false){
        return sweetAlert(
          "warning",
          "Falta Informaci??n",
          "Debe aceptar los terminos y la pol??tica de privacidad"
        );

      }

        const {imagenUrl, uploadError} = await UploadFile(imageRef.current.files);
        console.log({imagenUrl, uploadError})
        if (uploadError){ return setErrorImagen(true);}else{ setErrorImagen(false)}
        console.log('entre2')
        
 
      setLoading(true);
      // try {
      //   // const validRecaptcha = await recaptcha.current.execute();
      //   // if (!validRecaptcha) return setLoading(false);

      //   const response = await createUser({ variables: { ...values, marketingOption:information,image: imagenUrl,   city, state, district, art: art.name } });

      //   if (response.data?.addEvoucherBespoke) {
      //     resetForm();
      //     setLoading(false);

      //     alert('se creo');
      //   }
      //   // console.log(data)
      //   setLoading(false);
      // } catch (error) {
      //   console.log(error)
      //   setLoading(false)
      // }
      // console.log({...values,marketingOption: information,image: imagenUrl,   city, state, district, art: art.name});
      setLoading(false);
    },
  });

  // console.log(artes)
  return (
    <div className="form-bespoke">
      <form action="" onSubmit={formik.handleSubmit}>
        <div className="input--container">
          <div className="ch-ff__field">
            <label htmlFor="voucher">Nro de Comprobante de Pago (*)</label>
            <input
              type="text"
              name="voucher"
              placeholder="BP88-245030"
              value={formik.values.voucher}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.voucher && formik.errors.voucher ? (
              <p className="input---error">{formik.errors.voucher}</p>
            ) : null}
          </div>
          <div className="ch-ff__field">
            <label htmlFor="name">Nombre (*)</label>
            <input
              type="text"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.name && formik.errors.name ? (
              <p className="input---error">{formik.errors.name}</p>
            ) : null}
          </div>
          <div className="ch-ff__field">
            <label htmlFor="lastname">Apellidos (*)</label>
            <input
              type="text"
              id="lastname"
              name="lastname"
              value={formik.values.lastname}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.lastname && formik.errors.lastname ? (
              <p className="input---error">{formik.errors.lastname}</p>
            ) : null}
          </div>
          <div className="ch-ff__field">
            <label htmlFor="dni">DNI / Carnet de extranjer??a (*)</label>
            <input
              type="text"
              id="dni"
              name="dni"
              value={formik.values.dni}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.dni && formik.errors.dni ? (
              <p className="input---error">{formik.errors.dni}</p>
            ) : null}
          </div>
          <div className="ch-ff__field">
            <label htmlFor="email">Correo Electr??nico (*)</label>
            <input
              type="text"
              id="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email ? (
              <p className="input---error">{formik.errors.email}</p>
            ) : null}
          </div>
          <div className="ch-ff__field">
            <label htmlFor="phone">N??mero de contacto (*)</label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={formik.values.phone}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.phone && formik.errors.phone ? (
              <p className="input---error">{formik.errors.phone}</p>
            ) : null}
          </div>
          <Locations />
          <div className="ch-ff__field fileUploader" >
            <label htmlFor="product">Adjunta tu Boleta (*)</label>
            <input ref={imageRef} type="file" accept=".jpg, .jpeg, .png, .pdf, .tif, .bmp"  
              // onChange={(e)=> handleImage(e)} 
              required
              />
            <p className={errorImagen ? 'img-info input---error': 'img-info'}>*Solo se podr?? adjuntar un archivo con peso menor a 5MB.</p>
            <p className={errorImagen ? 'img-info input---error': 'img-info'}>*El documento cargado debe ser legible para su validaci??n.</p>
            <p className={errorImagen ? 'img-info input---error': 'img-info'}>*Formatos v??lidos JPG, PNG, BMP, TIF, PDF.</p>
          </div>
          <div className="ch-ff__field">
            <label htmlFor="art">Selecciona tu dise??o (*)</label>
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
          <div className="ch-ff__field ch-ff__field--inline false">
            <label htmlFor="acceptedPrivacyPolicy" className="checkbox">
              <div>
                Acepto la{" "}
                <a
                  href="https://www.samsung.com/pe/info/privacy/"
                  className="ch-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  POL??TICA DE PRIVACIDAD (*){" "}
                </a>
              </div>
              <input
                type="checkbox"
                id="acceptedPrivacyPolicy"
                name="acceptedPrivacyPolicy"
                defaultChecked={privacy}
                onClick={() => setPrivacy(!privacy)}
              />
              <span className="mark"></span>
            </label>
          </div>
          <div className="ch-ff__field ch-ff__field--inline false">
            <label htmlFor="acceptedTermsOfService" className="checkbox">
              <div>
                Acepto los{" "}
                <a
                  href="https://res.cloudinary.com/cheil-peru/image/upload/v1651515535/tyc/Terminos_y_Condiciones_BeSpoke_REF_Pre-registro_VF_khctko.pdf"
                  className="ch-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  Terminos y condiciones (*)
                </a>
              </div>
              <input
                type="checkbox"
                id="acceptedTermsOfService"
                name="acceptedTermsOfService"
                defaultChecked={terms}
                onClick={() => setTerms(!terms)}
              />
              <span className="mark"></span>
            </label>
          </div>
          <div className="ch-ff__field ch-ff__field--inline false">
            <label htmlFor="acceptedInformation" className="checkbox">
              <div>Deseo recibir informaci??n de Samsung</div>
              <input
                type="checkbox"
                id="acceptedInformation"
                name="acceptedInformation"
                defaultChecked={information}
                onClick={() => setInformation(!information)}
              />
              <span className="mark"></span>
            </label>
          </div>
        </div>
        <SubmitButton loading={loading} value={'REGISTRATE'} />
      </form>
    </div>
  );
};
export default FormBespoke;
