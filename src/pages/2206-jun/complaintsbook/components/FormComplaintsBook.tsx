import { useMutation } from "@apollo/client";
import { Form, Formik } from "formik";
import { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { sweetAlert } from "../../../../components/alert/sweetAlert";
import SubmitButton from "../../../../components/forms_v2/Submit";
import { CREATE_COMPLAINT_BOOK } from "../../../../graphql/ComplaintsBook";
import { iniValues } from "../includes/initialValues";
import { validationForm } from "../includes/validationForm";
import ComplainInfo from "./ComplainInfo";
import PersonalInfo from "./PersonalInfo";
import PurchaseInfo from "./PurchaseInfo";
import TutorInfo from "./TutorInfo";

const FormComplaintsBook = () => {
  const [loading, setLoading] = useState(false);
  const recaptcha = useRef<any>(null);
  const [age, setAge] = useState(false);


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
        validationSchema={validationForm}
        onSubmit={async (values, { resetForm }) => {
          setLoading(true);
        
          console.log({...values, underAge: age });
          setLoading(true);
            try {
              const validRecaptcha = await recaptcha.current.execute();
              if (!validRecaptcha) return setLoading(false);
              const response = await createComplaintBook({
                variables: {...values, underAge: age },
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
            console.log({...values, underAge: age });
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
            

            <div className="form-footer">
              <div className="final-info">
                <p>Debido que los datos personales que usted nos proporcione son necesarios para la atención de las reclamaciones de los servicios prestados por nuestra institución, SAMSUNG ELECTRONICS S.A.C. realizará el tratamiento de sus datos personales estricta y únicamente para dicha finalidad. Usted podrá ejercer sus derechos de información, acceso, rectificación, cancelación y oposición de sus datos personales, en cualquier momento, enviándonos un correo electrónico a servicioalcliente@samsung.com.</p>
                <p>La formulación del reclamo no impide acudir a otras vías de controversias ni es requisito previo para interponer una denuncia ante INDECOPI.</p>
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
