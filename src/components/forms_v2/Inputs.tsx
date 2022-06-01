import { ErrorMessage, useField } from "formik";
interface InputType1 {
  label: string;
  name: string;
  type?: "email" | "text" | "password";
  placeholder?: string;
  [x: string]: any;
}

interface InputType2 {
  label: string;
  name: string;
  placeholder?: string;
  [x: string]: any;
}

export const FormikTextInput = ({ label, ...props }: InputType1) => {
  const [field] = useField(props);

  return (
    <div className="ch-ff__field ch-ff__note false">
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className="text-input" {...field} {...props} />
      <ErrorMessage name={props.name} component="p" className="input---error" />
    </div>
  );
};

export const FormikCheckBox = ({ label, ...props }: InputType2) => {
  const [field] = useField({ ...props, type: "checkbox" });

  return (
    <div className="ch-ff__field">
      <label>
        <input type="checkbox" {...field} {...props} />
        {label}
      </label>
      <ErrorMessage name={props.name} component="p" className="input---error" />
    </div>
  );
};

export const FormikSelectInput = ({ label, ...props }: InputType2) => {
  const [field] = useField(props);

  return (
    <div className="ch-ff__field">
      <label htmlFor={props.id || props.name}>{label}</label>
      <select className="text-input" {...field} {...props} />
      <ErrorMessage name={props.name} component="p" className="input---error" />
    </div>
  );
};

export const PrivacyCheckBox = ({ label, ...props }: InputType2) => {
  const [field, meta] = useField({ ...props, type: "checkbox" });

  return (
      <div className="ch-ff__field ch-ff__field--inline false">
           <label htmlFor="acceptedPrivacyPolicy" className="checkbox">
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
            type="checkbox" id="acceptedPrivacyPolicy" {...field} {...props}
          />
          <span
            className={
                meta.touched && meta.error ? "mark error-checkbox" : "mark"
            }
          ></span>
          {/* <ErrorMessage name={props.name} component="p" className="input---error" /> */}
        </label>
      </div>
   
  );
};
export const TermsCheckBox = ({ label, ...props }: InputType2) => {
  const [field, meta] = useField({ ...props, type: "checkbox" });

  return (
      <div className="ch-ff__field ch-ff__field--inline false">
           <label htmlFor="acceptedTermsOfService" className="checkbox">
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
            type="checkbox" id="acceptedTermsOfService" {...field} {...props}
          />
          <span
            className={
                meta.touched && meta.error ? "mark error-checkbox" : "mark"
            }
          ></span>
          {/* <ErrorMessage name={props.name} component="p" className="input---error" /> */}
        </label>
      </div>
   
  );
};

export const InformationCheckBox = ({ label, ...props }: InputType2) => {
    const [field] = useField({ ...props, type: "checkbox" });
  
    return (
        <div className="ch-ff__field ch-ff__field--inline false">
             <label htmlFor="acceptedInformation" className="checkbox">
             <div>Deseo recibir información de Samsung</div>
            <input
              type="checkbox" id="acceptedInformation" {...field} {...props}
            />
            <span className="mark"></span>
          </label>
        </div>
     
    );
  };