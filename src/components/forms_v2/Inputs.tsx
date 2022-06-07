import { ErrorMessage, useField, useFormikContext } from "formik";
import "flatpickr/dist/themes/airbnb.css";
import Flatpickr from "react-flatpickr";

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

interface InputType3 {
  label: string;
  name: string;
  placeholder?: string;
  url?: string;
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

export const FormikAreaInput = ({ label, ...props }: InputType1) => {
  const [field] = useField(props);

  return (
    <div className="ch-ff__field ch-ff__note false">
      <label htmlFor={props.id || props.name}>{label}</label>
      <textarea className="text-input" {...field} {...props} />
      <ErrorMessage name={props.name} component="p" className="input---error" />
    </div>
  );
};

export const FormikDatePicker = ({ label, ...props }: InputType2) => {
  const { setFieldValue } = useFormikContext();
  const [field] = useField(props);
  return (
    <div className="ch-ff__field ch-ff__note false">
      <label htmlFor={props.id || props.name}>{label}</label>
      <Flatpickr
        // {...field}
        {...props}
        options={{
          // enableTime: true,
          maxDate: "today",
          dateFormat: "d-m-Y",
          disableMobile: true,
          locale: {
            firstDayOfWeek: 1,
            weekdays: {
              shorthand: ["Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sa"],
              longhand: [
                "Domingo",
                "Lunes",
                "Martes",
                "Miércoles",
                "Jueves",
                "Viernes",
                "Sábado",
              ],
            },
            months: {
              shorthand: [
                "Ene",
                "Feb",
                "Mar",
                "Abr",
                "May",
                "Jun",
                "Jul",
                "Ago",
                "Sep",
                "Оct",
                "Nov",
                "Dic",
              ],
              longhand: [
                "Enero",
                "Febreo",
                "Мarzo",
                "Abril",
                "Mayo",
                "Junio",
                "Julio",
                "Agosto",
                "Septiembre",
                "Octubre",
                "Noviembre",
                "Diciembre",
              ],
            },
          },
        }}
        // onChange={([date]) => {
        //   setFecha({ date });
        // }}
        onChange={([date]) => {
          const fecha = (date.toISOString().substring(0,10));
          console.log(fecha);
          setFieldValue(field.name, fecha);
        }}
      />
      <ErrorMessage name={props.name} component="p" className="input---error" />
    </div>
  );
};

export const TermsCheckBox = ({ label, url='https://samsung.com.pe', ...props }: InputType3) => {
  const [field, meta] = useField({ ...props, type: "checkbox" });

  return (
    <div className="ch-ff__field ch-ff__field--inline false">
      <label htmlFor="acceptedTermsOfService" className="checkbox">
        <div>
          Acepto los{" "}
          <a
            href={url}
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
          {...field}
          {...props}
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
export const PrivacyCheckBox = ({ label,url="https://www.samsung.com/pe/info/privacy/", ...props }: InputType3) => {
  const [field, meta] = useField({ ...props, type: "checkbox" });

  return (
    <div className="ch-ff__field ch-ff__field--inline false">
      <label htmlFor="acceptedPrivacyPolicy" className="checkbox">
        <div>
          Acepto la{" "}
          <a
            href={url}
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
          {...field}
          {...props}
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
        <input type="checkbox" id="acceptedInformation" {...field} {...props} />
        <span className="mark"></span>
      </label>
    </div>
  );
};
