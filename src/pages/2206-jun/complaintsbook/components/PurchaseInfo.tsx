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
        <h2>Registra información de tu compra</h2>
      </div>
      <div className="twice-row">
        <FormikTextInput label="Número de pedido (*)" name="orderNumber" type="text" />

        <FormikSelectInput label="Bien adquirido (*)" name="adquiredGood">
          <option value="">Selecciona</option>
          <option value="producto">Producto</option>
          <option value="servicio">Servicio</option>
        </FormikSelectInput>
      </div>
      <div className="area-container">
        <FormikAreaInput
          label="Descripción del producto o servicio"
          name="adquiredDescription"
          rows="5"
          aria-invalid="true"
        />

      </div>
      <div className="twice-row">
        <FormikTextInput label="Monto reclamado (*)" name="reclaimedAmount" type="text" />

        <FormikDatePicker label="Fecha de compra (*)" name="datePurchased" type="text" />
      </div>
    </div>
  );
};

export default PurchaseInfo;
