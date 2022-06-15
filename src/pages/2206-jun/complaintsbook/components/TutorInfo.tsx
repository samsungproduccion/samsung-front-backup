import { FormikSelectInput, FormikTextInput } from "../../../../components/forms_v2/Inputs";

interface Props{
  age: boolean;
}
const TutorInfo = ({age}: Props) => {
  return (
    <div className={age ? "form-section2" : "form-section2 novisible" }>
      <div className="section-title">
        <h2>Datos del apoderado (En caso la persona que presenta el reclamo sea menor de edad) </h2>
      </div>
      <div className="input--container">
        <FormikTextInput label="Nombres y Apellidos" name="tutorName" type="text" />

        <FormikSelectInput label="Tipo de documento" name="tutorDocType" >
          <option value="">Selecciona</option>
          <option value="dni">DNI</option>
          <option value="ce">CE</option>
          <option value="pasaporte">Pasaporte</option>
        </FormikSelectInput>
        <FormikTextInput
          label="Número de documento"
          name="tutorDocNumber"
          type="text"
        />
      </div>
    </div>
  );
};

export default TutorInfo;
