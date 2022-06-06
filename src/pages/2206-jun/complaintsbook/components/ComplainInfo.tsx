import { FormikTextInput } from "../../../../components/forms_v2/Inputs";

const ComplainInfo = () => {

  return(
    <div className="form-section">
      <div className="section-title">
        <h2>Datos Personales</h2>
      </div>
      <div className="input--container">
        <FormikTextInput label="Nombre (*)" name="name" type="text" />

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
        <FormikTextInput label="Domicilio (*)" name="voucher" type="text" />
      </div>
    </div>
  );
}

export default ComplainInfo;