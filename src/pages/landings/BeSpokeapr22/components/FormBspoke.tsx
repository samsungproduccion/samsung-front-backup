import { Form, Formik } from "formik";
import { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { CREATE_BESPOKE } from "../../../../graphql/BeSpoke";
import { useMutation } from "@apollo/client";
import { delay } from "../../../../utils/delay";
import {
  FormikTextInput,
  InformationCheckBox,
  PrivacyCheckBox,
  TermsCheckBox,
} from "../../../../components/forms_v2/Inputs";
import SubmitButton from "../../../../components/forms_v2/Submit";
import { validationForm } from "../includes/validationForm";
const FormBspoke = () => {
  const [loading, setLoading] = useState(false);
  const recaptcha = useRef<any>(null);

  const [createUser] = useMutation(CREATE_BESPOKE, {
    onError(error) {
      if (error.networkError) {
        alert("Hubo un error");
      } else {
        alert(error.message);
      }
    },
  });

  return (
    <div className="form-bespokeapr22">
      <Formik
        initialValues={{
          name: "",
          lastname: "",
          email: "",
          dni: "",
          phone: "",
          terms: false,
          privacy: false,
          info: false,
        }}
        validationSchema={validationForm}
        onSubmit={async (values, { resetForm }) => {
          setLoading(true);
          try {
            const validRecaptcha = await recaptcha.current.execute();
            if (!validRecaptcha) return setLoading(false);

            const response = await createUser({ variables: { ...values } });

            if (response.data?.addBeSpokeUser) {
              resetForm();
              setLoading(false);

              window.location.href =
                "https://samsung.com.pe/thank-you-bespoke/";
            }
            // console.log(data)
            setLoading(false);
          } catch (error) {
            console.log(error);
            setLoading(false);
          }
        }}
      >
        {(formik) => (
          <Form className="ch-ff" id="form-bespokeapr22">
            <ReCAPTCHA
              sitekey="6Lew4qkZAAAAAK50VC6HnGpNerA20BbixccSFcTh"
              size="invisible"
              id="recaptcha-form"
              ref={recaptcha}
            />
            <div className="ch-flex form-container-component">
              <FormikTextInput label="Nombres" name="name" type="text" />

              <FormikTextInput label="Apellidos" name="lastname" type="text" />
              <FormikTextInput
                label="Correo Electrónico"
                name="email"
                type="text"
              />
              <FormikTextInput label="Celular" name="phone" type="text" />
              <FormikTextInput
                label="DNI / Carnet de Extranjeria"
                name="dni"
                type="text"
              />
              <div></div>

              <PrivacyCheckBox label="PrivacyPolicy" name="privacy" />
              <TermsCheckBox label="Terms and Conditions" name="terms" />
              <InformationCheckBox
                label="Deseo recibir información de Samsung"
                name="info"
              />
            </div>
            <SubmitButton loading={loading} value={"PRE-REGÍSTRATE"} />
          </Form>
        )}
      </Formik>
    </div>
  );
};
export default FormBspoke;
