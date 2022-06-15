import {
  FormikAreaInput,
  FormikSelectInput,
} from "../../../../components/forms_v2/Inputs";

const ComplainInfo = () => {
  return (
    <div className="form-section">
      <div className="section-title">
        <h2>3. Detalle de la reclamación y pedido del consumidor</h2>
      </div>
      <div className="input--container">
        <div>
          <FormikSelectInput
            label="Tipo de reclamación (*)"
            name="claimType"
          >
            <option value="">Selecciona</option>
            <option value="R">Reclamo</option>
            <option value="Q">Queja</option>
          </FormikSelectInput>
          <div className="information">
            <p>
              <strong>Reclamo : </strong> Disconformidad relacionada a los
              productos o servicios.
            </p>
            <p>
              <strong>Queja : </strong> Malestar o descontento respecto a la
              atención al público.
            </p>
          </div>
        </div>

        <FormikAreaInput
          label="Detalle del reclamación (*)"
          name="claimDetail"
          rows="5"
          placeholder="Disconformidad relacionada al producto o servicio adquirido."
        />
        <FormikAreaInput
          label="Pedido (Lo que solicita) (*)"
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
