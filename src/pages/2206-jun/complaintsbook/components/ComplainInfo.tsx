import {
  FormikAreaInput
} from "../../../../components/forms_v2/Inputs";

const ComplainInfo = () => {
  return (
    <div className="form-section">
      <div className="section-title">
        <h2>Detalla tu reclamo o queja</h2>
      </div>
      <div className="twice-row">
        <FormikAreaInput
          label="Detalle del reclamo"
          name="claimDetail"
          rows="5"
          placeholder="Disconformidad relacionada al producto o servicio adquirido."
        />

        <FormikAreaInput
          label="Detalle de la queja"
          name="complainDetail"
          rows="5"
          placeholder="Malestar o descontento con respecto a la atención brindada."
        />
      </div>
      <div className="area-container">
        <FormikAreaInput
          label="Pedido o compensación solicitada (*)"
          name="customerOrder"
          rows="5"
          placeholder="¿Cómo deseas que resolvamos tu reclamo o queja?"
          aria-invalid="true"
        />
      </div>
    </div>
  );
};

export default ComplainInfo;
