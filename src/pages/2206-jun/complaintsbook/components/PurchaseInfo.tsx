import {
  FormikAreaInput,
  FormikDatePicker,
  FormikSelectInput,
  FormikTextInput,
} from "../../../../components/forms_v2/Inputs";

const PurchaseInfo = () => {
  return (
    <div className="form-section">
      <div className="section-title">
        <h2>2. Identificación del bien contratado</h2>
      </div>
      <div className="twice-row">

        <FormikTextInput label="Monto reclamado S/ (*)" name="reclaimedAmount" type="text" />
        <FormikSelectInput label="Identificación del bien contatado (*)" name="adquiredGood">
          <option value="">Selecciona</option>
          <option value="P">Producto</option>
          <option value="S">Servicio</option>
        </FormikSelectInput>
       
      </div>
      <div className="area-container">
      <FormikAreaInput
          label="Descripción (*)"
          name="adquiredDescription"
          rows="5"
          aria-invalid="true"
        />
      </div>
    </div>
  );
};

export default PurchaseInfo;
