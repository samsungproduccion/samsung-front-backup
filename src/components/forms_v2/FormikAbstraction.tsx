import { Formik, Form} from "formik";
import "../styles/styles.css";
import * as Yup from "yup";

import { FormikTextInput, FormikSelectInput, FormikCheckBox } from "./Inputs";

export const FormikAbstraction = () => {

  return (
    <div>
      <h1>Formik Basic Form</h1>
      
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          terms: false,
          jobType: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, "Debe tener 15 caracteres o menos")
            .required("requerido"),
          lastName: Yup.string()
            .max(15, "Debe tener 15 caracteres o menos")
            .required("requerido"),
          email: Yup.string()
            .email("Email ingresado no es valido")
            .required("requerido"),
          terms: Yup.boolean().isTrue(
            "Debe aceptar los terminos y condiciones"
          ),
          jobType: Yup.string()
            .notOneOf(["designer", "it-jr"], "Opcion no valida")
            .required("requerido"),
        })}
      >
        {(formik) => (
          <Form>
            <FormikTextInput label="firstName" name="firstName" />
            <FormikTextInput label="lastName" name="lastName" />
            <FormikTextInput label="email" name="email" type="email" />

            <FormikSelectInput label="jobType" name="jobType" >
              <option value="">Pick something</option>
              <option value="developer">Developer</option>
              <option value="designer">Designer</option>
              <option value="it-senior">IT Senior</option>
              <option value="it-jr">IT Junior</option>
            </FormikSelectInput>

            <FormikCheckBox label="Terms and Conditions" name="terms" />

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
