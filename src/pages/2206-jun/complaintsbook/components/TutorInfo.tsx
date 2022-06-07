import { FormikTextInput } from "../../../../components/forms_v2/Inputs";
import Locations from "../../../../components/locations";

interface Props{
  age: boolean;
}
const TutorInfo = ({age}: Props) => {
  return (
    <div className={age ? "form-section" : "form-section novisible" }>
      <div className="section-title">
        <h2>Datos del padre/madre/tutor</h2>
      </div>
      <div className="input--container">
        <FormikTextInput label="Nombre (*)" name="tutorFirstName" type="text" />

        <FormikTextInput label="Apellidos (*)" name="tutorLastName" type="text" />
        <FormikTextInput
          label="DNI / Carnet de extranjería (*)"
          name="tutorNationalId"
          type="text"
        />
        <FormikTextInput
          label="Correo Electrónico (*)"
          name="tutorEmail"
          type="text"
        />
        <FormikTextInput
          label="Número de contacto (*)"
          name="tutorPhone"
          type="text"
        />
        <FormikTextInput label="Domicilio (*)" name="tutorAddress" type="text" />
        <Locations stateName="tutorState" cityName="tutorCity" districtName="tutorDistrict" />
      </div>
    </div>
  );
};

export default TutorInfo;
