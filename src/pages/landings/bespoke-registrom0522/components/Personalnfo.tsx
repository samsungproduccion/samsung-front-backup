import { FormikTextInput } from "../../../../components/forms_v2/Inputs";

export const PersonalInfo = () => {



  return (
    <div className="form-section">
      <h2>Datos Personales</h2>
      <div className="input--container">
        <FormikTextInput label="Nombres (*)" name="name" type="text" />

        <FormikTextInput label="Apellidos (*)" name="lastname" type="text" />
        <FormikTextInput
          label="DNI / Carnet de extranjería (*)"
          name="dni"
          type="text"
        />
        <FormikTextInput
          label="Correo Electrónico (*)"
          name="email"
          type="text"
        />
        <FormikTextInput
          label="Número de contacto (*)"
          name="phone"
          type="text"
        />
        <FormikTextInput
          label="Dirección (*)"
          name="address"
          type="text"
        />
      </div>
    </div>
  );
};
