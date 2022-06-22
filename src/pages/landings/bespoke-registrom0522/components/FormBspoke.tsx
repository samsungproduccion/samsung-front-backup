import { FC, useRef, useState } from "react";
import { Form, Formik } from "formik";
import { sweetAlert } from "../../../../components/alert/sweetAlert";
import { useMutation } from "@apollo/client";
import { UploadFile } from "../../../../utils/uploadFile";
import { CREATE_EVOUCHER_BESPOKE } from "../../../../graphql/BeSpoke";
import SubmitButton from "../../../../components/forms_v2/Submit";
import { validationForm } from "../includes/validationForm";
import ReCAPTCHA from "react-google-recaptcha";
import {
  FormikSelectInput,
  FormikTextInput,
  InformationCheckBox,
  PrivacyCheckBox,
  TermsCheckBox,
} from "../../../../components/forms_v2/Inputs";
import { initialValues } from "../includes/formValidations";
import { PersonalInfo } from "./Personalnfo";
import { ImageSection } from "./ImageSection";

const FormBespoke: FC = () => {
  const recaptcha = useRef<any>(null);
  const imageRef = useRef<any>(null);
  const [loading, setLoading] = useState(false);
  const [errorImagen, setErrorImagen] = useState(false);
  const [selectedImages, setSelectedImages] = useState<string[]>([]);

  // const selectedImages = imageList.filter(image =>image.additionalInfo===doors);

  const modifyImages = (id: string) => {
    // if (selectedImages.length >= 5 ) return;
    const newArr = selectedImages;
    if (newArr.includes(id)) {
      const index = newArr.indexOf(id);
      if (index > -1) {
        newArr.splice(index, 1);
      }
    } else {
      newArr.push(id);
      setSelectedImages(newArr);
    }
    // console.log(selectedImages);
    // console.log(selectedImages.join())
  };


  const [createUser] = useMutation(CREATE_EVOUCHER_BESPOKE, {
    onError(error) {
      if (error.networkError) {
        sweetAlert("error", "Hubo un error", "");
      } else {
        sweetAlert("error", "No se registro", error.message);
      }
    },
  });

  return (
    <div className="form-bespoke">
      <Formik
        initialValues={initialValues}
        validationSchema={validationForm}
        onSubmit={async (values, { resetForm }) => {
          const art = selectedImages.join();
          if(selectedImages.length===0) return sweetAlert("warning", "Debe seleccionar almenos 1 diseño", "");
          setLoading(true);
          const { imagenUrl, uploadError } = await UploadFile(
            imageRef.current.files,
            'evoucherBespoke'
          );
          // console.log({imagenUrl, uploadError})
          if (uploadError) {
            setLoading(false);
            return setErrorImagen(true);
          } else {
            setErrorImagen(false);
          }

          setLoading(true);
          try {
            // const validRecaptcha = await recaptcha.current.execute();
            // if (!validRecaptcha) return setLoading(false);

            const response = await createUser({
              variables: {
                ...values,
                image: imagenUrl,
                art: selectedImages.join(),
              },
            });

            if (response.data?.addEvoucherBespoke) {
              resetForm();
              setLoading(false);

              window.location.href = "https://samsung.com.pe/thank-you-bespoke/";
              // alert("se registro");
            }
            // console.log(data)
            setLoading(false);
          } catch (error) {
            setLoading(false);
          }
          setLoading(false);
        }}
      >
        {(formik) => (
          <Form>
            <ReCAPTCHA
              sitekey="6Lew4qkZAAAAAK50VC6HnGpNerA20BbixccSFcTh"
              size="invisible"
              id="recaptcha-form"
              ref={recaptcha}
            />
            <PersonalInfo />
            <div className="form-section">
              <h2>Datos de tu compra</h2>
              <div className="input--container">
              <FormikSelectInput
                label="Cantidad Comprada (*)"
                name="quantity"
                as="select"
              >
                <option value="">Selecciona</option>
                <option value="1">1 Bespoke</option>
                <option value="2">2 Bespoke</option>
                <option value="3">3 Bespoke</option>
              </FormikSelectInput>
                
                <FormikTextInput
                  label="Nro. de Comprobante de Pago (*)"
                  name="voucher"
                  type="text"
                />
                <FormikTextInput
                  label="Tienda de compra (*)"
                  name="store"
                  type="text"
                />
                <div className="ch-ff__field fileUploader">
                  <label htmlFor="product">Adjunta tu Boleta (*)</label>
                  <input
                    ref={imageRef}
                    type="file"
                    accept=".jpg, .jpeg, .png, .pdf, .tif, .bmp"
                    // onChange={(e)=> handleImage(e)}
                    required
                  />
                  <p
                    className={
                      errorImagen ? "img-info input---error" : "img-info"
                    }
                  >
                    *Solo se podrá adjuntar un archivo con peso menor a 5MB.
                  </p>
                  <p
                    className={
                      errorImagen ? "img-info input---error" : "img-info"
                    }
                  >
                    *El documento cargado debe ser legible para su validación.
                  </p>
                  <p
                    className={
                      errorImagen ? "img-info input---error" : "img-info"
                    }
                  >
                    *Formatos válidos JPG, PNG, BMP, TIF, PDF.
                  </p>
                </div>
                <div></div>
                <div></div>
              </div>
            </div>
            <div className="form-section">
              <ImageSection
                selectedImages={selectedImages}
                setSelectedImages={modifyImages}
              />
              {/* {templatePickerTemplate} */}
            </div>
            <div className="images-info">Todas las imágenes son referenciales</div>
            <div className="checkboxes">
              <PrivacyCheckBox label="PrivacyPolicy" name="privacy" />
              <TermsCheckBox label="Terms and Conditions" name="terms" />
              <InformationCheckBox
                label="Deseo recibir información de Samsung"
                name="marketingOption"
              />
            </div>
            <SubmitButton loading={loading} value={"REGÍSTRATE"} />
          </Form>
        )}
      </Formik>
    </div>
  );
};
export default FormBespoke;
