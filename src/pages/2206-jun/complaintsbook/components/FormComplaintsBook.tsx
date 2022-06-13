import { Field, Form, Formik } from "formik";
import { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { useMutation } from "@apollo/client";
import { PrivacyCheckBox } from "../../../../components/forms_v2/Inputs";
import SubmitButton from "../../../../components/forms_v2/Submit";
import { validationForm, validationForm2 } from "../includes/validationForm";
import PersonalInfo from "./PersonalInfo";
import PurchaseInfo from "./PurchaseInfo";
import ComplainInfo from "./ComplainInfo";
import { iniValues } from "../includes/initialValues";
import TutorInfo from "./TutorInfo";
import { UploadFiles } from "../../../../utils/uploadFiles";
import { sweetAlert } from "../../../../components/alert/sweetAlert";
import { CREATE_COMPLAINT_BOOK } from "../../../../graphql/ComplaintsBook";

const FormComplaintsBook = () => {
  const [loading, setLoading] = useState(false);
  const recaptcha = useRef<any>(null);
  const imageRef = useRef<any>(null);
  const [age, setAge] = useState(false);
  const [errorImagen, setErrorImagen] = useState(false);


  const [createComplaintBook] = useMutation(CREATE_COMPLAINT_BOOK, {
    onError(error) {
      
      if (error.networkError) {
        sweetAlert("error", "Hubo un error", "");
      } else {
        sweetAlert("error", "No se registro", error.message);
      }
    },
  });

  return (
    <div className="form-complaints-book">
      <Formik
        initialValues={iniValues}
        validationSchema={age ? validationForm2 : validationForm}
        onSubmit={async (values, { resetForm }) => {
          let imageLink = '';
          setLoading(true);
          if (imageRef.current.files[0]) {
            const { imagenUrl, uploadError } = await UploadFiles(
              imageRef.current.files,
              "complaintsBookTest"
            );
            
            if (uploadError) {
              setLoading(false);
              return setErrorImagen(true);
            } else {
              imageLink = imagenUrl;
              setErrorImagen(false);
            }
            console.log({imagenUrl, uploadError})
          }
          console.log({...values, uploadFile: imageLink, underAge: age });
          setLoading(true);
          try {
            const validRecaptcha = await recaptcha.current.execute();
            if (!validRecaptcha) return setLoading(false);
            const response = await createComplaintBook({
              variables: {...values, uploadFile: imageLink, underAge: age },
            });
            console.log(response.data)
            if (response.data?.addComplaintsBook) {
              resetForm();
              setLoading(false);
              sweetAlert("success", "Se registró correctamente", "");
            }
            setLoading(false);
          } catch (error) {
            console.log(error);
            setLoading(false);
          }
          console.log({...values, uploadFile: imageLink, underAge: age });
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
            <div className="age-container" style={{ marginBottom: "30px" }}>
              <div className="ch-ff__field ch-ff__field--inline false">
                <label htmlFor="underAge" className="checkbox">
                  <div>¿Eres menor de edad?</div>
                  <input
                    type="checkbox"
                    id="underAge"
                    name="underAge"
                    checked={age}
                    onChange={() => setAge(!age)}
                  />
                  <span className="mark"></span>
                </label>
              </div>
            </div>
            <TutorInfo age={age} />
            <PurchaseInfo />
            <ComplainInfo />
            
            <div className="ch-ff__field fileUploader">
                <label htmlFor="product">Adjunta evidencias</label>
                <input
                  ref={imageRef}
                  type="file"
                  accept=".jpg, .jpeg, .png, .pdf, .tif, .bmp"
                  // onChange={(e)=> handleImage(e)}
                  
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
                  *Formatos válidos JPG, PNG, BMP, TIF, PDF.
                </p>
              </div>

            <div className="form-footer">
              <div className="final-info">
                <p>Debido que los datos personales que usted nos proporcione son necesarios para la atención de las reclamaciones de los servicios prestados por nuestra institución, SAMSUNG ELECTRONICS S.A.C. realizará el tratamiento de sus datos personales estricta y únicamente para dicha finalidad. Usted podrá ejercer sus derechos de información, acceso, rectificación, cancelación y oposición de sus datos personales, en cualquier momento, enviándonos un correo electrónico a servicioalcliente@samsung.com.</p>
                <p>La formulación del reclamo no impide acudir a otras vías de controversias ni es requisito previo para interponer una denuncia ante INDECOPI.</p>
              </div>
              <div className="checkboxes">
                <PrivacyCheckBox
                  label="PrivacyPolicy"
                  name="acceptedPrivacyPolicy"
                />
              </div>
              <div className="captcha-info">
                Este sitio esta protegido por reCAPTCHA. Aplican la{" "}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noreferrer"
                >
                  Política de Privacidad
                </a>{" "}
                de Google y los{" "}
                <a
                  href="https://policies.google.com/terms"
                  target="_blank"
                  rel="noreferrer"
                >
                  Términos del Servicio
                </a>
              </div>
              <SubmitButton loading={loading} value={"ENVIAR"} />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormComplaintsBook;
