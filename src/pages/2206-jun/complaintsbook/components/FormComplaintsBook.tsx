import { Field, Form, Formik } from "formik";
import { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { CREATE_BESPOKE } from "../../../../graphql/BeSpoke";
import { useMutation } from "@apollo/client";
import { PrivacyCheckBox } from "../../../../components/forms_v2/Inputs";
import SubmitButton from "../../../../components/forms_v2/Submit";
import { validationForm } from "../includes/validationForm";
import PersonalInfo from "./PersonalInfo";
import PurchaseInfo from "./PurchaseInfo";
import ComplainInfo from "./ComplainInfo";
import { UploadFile } from "../../../../utils/uploadFile";
import { iniValues } from "../includes/initialValues";
import TutorInfo from "./TutorInfo";

const FormComplaintsBook = () => {
  const [loading, setLoading] = useState(false);
  const recaptcha = useRef<any>(null);
  const imageRef = useRef<any>(null);
  const [age, setAge] = useState(false);
  const [errorImagen, setErrorImagen] = useState(false);

  // console.log(age)

  return (
    <div className="form-complaints-book">
      <Formik
        initialValues={iniValues}
        validationSchema={validationForm}
        onSubmit={async (values, { resetForm }) => {
          console.log(values);
          // setLoading(true);
          // const { imagenUrl, uploadError } = await UploadFile(
          //   imageRef.current.files
          // );
          // // console.log({imagenUrl, uploadError})
          // if (uploadError) {
          //   setLoading(false);
          //   return setErrorImagen(true);
          // } else {
          //   setErrorImagen(false);
          // }
          // setLoading(true);
          // try {
          //   // const validRecaptcha = await recaptcha.current.execute();
          //   // if (!validRecaptcha) return setLoading(false);
          //   const response = await createUser({
          //     variables: { ...values, image: imagenUrl, art: art.name },
          //   });
          //   if (response.data?.addEvoucherBespoke) {
          //     resetForm();
          //     setLoading(false);
          //     window.location.href =
          //       "https://samsung.com.pe/thank-you-bespoke-registro/";
          //   }
          //   // console.log(data)
          //   setLoading(false);
          // } catch (error) {
          //   console.log(error);
          //   setLoading(false);
          // }
          // console.log({ ...values, image: imagenUrl, art: art.name });
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
            {age ? <TutorInfo age={age} /> : null}
            <PurchaseInfo />
            <ComplainInfo />

            <div className="form-footer">
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
