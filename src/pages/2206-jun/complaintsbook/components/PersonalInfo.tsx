import { FormikSelectInput, FormikTextInput } from '../../../../components/forms_v2/Inputs';

const PersonalInfo = () => {
  return (
    <div className="form-section">
      <div className="section-title">
        <h2>1. Idenitificación del consumidor reclamante</h2>
      </div>
      <div className="input--container">
        <FormikTextInput label="Nombre (*)" name="firstName" type="text" />

        <FormikTextInput label="Apellido Paterno (*)" name="lastNameP" type="text" />
        <FormikTextInput label="Apellido Materno (*)" name="lastNameM" type="text" />
        <FormikSelectInput label="Tipo de documento: (*)" name="docType" >
          <option value="">Selecciona</option>
          <option value="dni">DNI</option>
          <option value="ce">CE</option>
          <option value="pasaporte">Pasaporte</option>
        </FormikSelectInput>
        <FormikTextInput
          label="Número de documento (*)"
          name="docNumber"
          type="text"
        />
        <FormikTextInput label="Dirección (*)" name="address" type="text" />
        <FormikTextInput
          label="Email (*)"
          name="email"
          type="text"
        />
        <FormikTextInput
          label="Celular (*)"
          name="phone"
          type="text"
        />
        
      </div>
    </div>
  );
};

export default PersonalInfo;
