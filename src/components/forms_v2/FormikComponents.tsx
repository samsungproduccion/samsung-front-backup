import { Formik, Form, Field, ErrorMessage } from "formik";
import "../styles/styles.css";
import * as Yup from "yup";

export const FormikComponents = () => {
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
          terms: Yup.boolean()
              .isTrue("Debe aceptar los terminos y condiciones"),
          jobType: Yup.string()
          .notOneOf(["designer", "it-jr"], "Opcion no valida")
          .required("requerido"),
        })}
      >
        {(formik) => (
          <Form>
            <label htmlFor="firstName">First Name</label>
            <Field name="firstName" type="text" />
            <ErrorMessage name="firstName" component="span" />

            <label htmlFor="lastName">Last Name</label>
            <Field name="lastName" type="text" />
            <ErrorMessage name="lastName" component="span" />

            <label htmlFor="email">Email</label>
            <Field name="email" type="text" />
            <ErrorMessage name="email" component="span" />

            <label htmlFor="jobType">Job Type</label>
            <Field name="jobType" as="select"> 
              <option value="">Pick something</option>
              <option value="developer">Developer</option>
              <option value="designer">Designer</option>
              <option value="it-senior">IT Senior</option>
              <option value="it-jr">IT Junior</option>
            </Field>
            <ErrorMessage name="jobType" component="span" />

            <label htmlFor="terms">
              <Field name="terms" id='terms' type="checkbox" />
              Terms and Conditions
            
            </label>
            <ErrorMessage name="terms" component="span" />

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
