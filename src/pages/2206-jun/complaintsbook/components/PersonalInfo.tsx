import { FormikTextInput } from "../../../../components/forms_v2/Inputs";
import Locations from "../../../../components/locations";

const PersonalInfo = () => {
  return (
    <div className="form-section">
      <div className="section-title">
        <h2>Registra tus datos personales</h2>
      </div>
      <div className="input--container">
        <FormikTextInput label="Nombre (*)" name="firstName" type="text" />

        <FormikTextInput label="Apellidos (*)" name="lastName" type="text" />
        <FormikTextInput
          label="DNI / Carnet de extranjería (*)"
          name="nationalId"
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
        <FormikTextInput label="Domicilio (*)" name="address" type="text" />
        <Locations />
      </div>
    </div>
  );
};

export default PersonalInfo;
