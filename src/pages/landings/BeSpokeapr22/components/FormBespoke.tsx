import { useFormik } from "formik";
import { useRef, useState } from "react";
import * as Yup from "yup";
import { isNumber } from "../../../../utils/isNumber";
import ReCAPTCHA from "react-google-recaptcha";
import { CREATE_BESPOKE } from "../../../../graphql/BeSpoke";
import { useMutation } from "@apollo/client";
import { delay } from "../../../../utils/delay";

const FormBespoke = () => {
  const [privacy, setPrivacy] = useState(false);
  const [terms, setTerms] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
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
  

  const formik = useFormik({
    initialValues: {
      name: "",
      lastname: "",
      email: "",
      dni: "",
      phone: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .required("El email es obligatorio")
        .email("Email ingresado no valido"),
      name: Yup.string().required("El nombre es obligatorio"),
      lastname: Yup.string().required("El apellido es obligatorio"),
      dni: Yup.string()
        .required("El DNI es obligatorio")
        .matches(isNumber, "DNI no válido")
        .min(8, "Debe tener mínimo 8 digitos")
        .max(10, " Debe tener máximo 10 digitos"),
      phone: Yup.string()
        .required("El celular es obligatorio")
        .matches(isNumber, "Teléfono no válido")
        .min(9, "Debe tener 9 digitos")
        .max(9, "Debe tener 9 digitos"),
    }),
    onSubmit: async (values, { resetForm }) => {

      setError(false);
      await delay(5);
      if (privacy === false || terms === false){
        return setError( true);
      }
        setLoading(true);
      try {
        const validRecaptcha = await recaptcha.current.execute();
        if (!validRecaptcha) return setLoading(false);

        const response = await createUser({ variables: { ...values } });

        if (response.data?.addBeSpokeUser) {
          resetForm();
          setLoading(false);

          window.location.href = 'http://front-test.samsung.com.pe/thanks-bespoke';
        }
        // console.log(data)
        setLoading(false);
      } catch (error) {
        console.log(error)
        setLoading(false)
      }

    },
  });

  return (
    <div className="form-bespokeapr22">
      <form
        className="ch-ff"
        id="form-bespokeapr22"
        onSubmit={formik.handleSubmit}
      >
        <ReCAPTCHA
          sitekey="6Lew4qkZAAAAAK50VC6HnGpNerA20BbixccSFcTh"
          size="invisible"
          id="recaptcha-form"
          ref={recaptcha}
        />
        <div className="ch-flex form-container-component">
          <div>
            <div className="ch-ff__field ch-ff__note false">
              <label htmlFor="name">Nombres</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.name && formik.errors.name ? (
                <p className="input---error">{formik.errors.name}</p>
              ) : null}
            </div>
          </div>
          <div>
            <div className="ch-ff__field ch-ff__note false">
              <label htmlFor="lastname">Apellidos</label>
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
          </div>
          <div>
            <div className="ch-ff__field ch-ff__note false">
              <label htmlFor="email">Correo Electrónico</label>
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
          </div>
          <div>
            <div className="ch-ff__field ch-ff__note false">
              <label htmlFor="phone">Celular</label>
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
          </div>
          <div>
            <div className="ch-ff__field ch-ff__note false">
              <label htmlFor="dni">DNI / Carnet de extranjería</label>
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
          </div>
          <div></div>
          <div>
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
                    POLÍTICA DE PRIVACIDAD (*){" "}
                  </a>
                </div>
                <input
                  type="checkbox"
                  id="acceptedPrivacyPolicy"
                  name="acceptedPrivacyPolicy"
                  defaultChecked={privacy}
                  onClick={() => setPrivacy(!privacy)}
                />
                <span className={(error===true && !privacy) ? "mark error-checkbox" :"mark"}></span>
              </label>
            </div>
          </div>
          <div>
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
                    Terminos y condiciones (*){" "}
                  </a>
                </div>
                <input
                  type="checkbox"
                  id="acceptedTermsOfService"
                  name="acceptedTermsOfService"
                  defaultChecked={terms}
                  onClick={() => setTerms(!terms)}
                />
                <span className={(error===true && !terms) ? "mark error-checkbox" :"mark"}></span>
              </label>
            </div>
          </div>
          <div>
            <div className="ch-ff__field ch-ff__field--inline false">
              <label htmlFor="acceptedInformation" className="checkbox">
                <div>Deseo recibir información de Samsung</div>
                <input
                  type="checkbox"
                  id="acceptedInformation"
                  name="acceptedInformation"
                />
                <span className="mark"></span>
              </label>
            </div>
          </div>
        </div>
        <div className="button--container">
          {loading ? (
            <button className="ch-btn" id="btnSend" disabled>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                style={{
                  background: "rgb(255, 255, 255) none repeat scroll 0% 0%;",
                  margin: "auto",
                  shapeRendering: "auto",
                }}
                width="30x"
                height="30x"
                viewBox="0 0 100 100"
                preserveAspectRatio="xMidYMid"
              >
                <circle
                  cx="50"
                  cy="50"
                  fill="none"
                  stroke="#fdfdfd"
                  stroke-width="12"
                  r="26"
                  stroke-dasharray="122.52211349000194 42.840704496667314"
                >
                  <animateTransform
                    attributeName="transform"
                    type="rotate"
                    repeatCount="indefinite"
                    dur="1.5384615384615383s"
                    values="0 50 50;360 50 50"
                    keyTimes="0;1"
                  ></animateTransform>
                </circle>
              </svg>
            </button>
          ) : (
            <input
              type="submit"
              className="ch-btn"
              id="btnSend"
              value="PRE-REGÍSTRATE"
            />
          )}
        </div>
      </form>
    </div>
  );
};

export default FormBespoke;
