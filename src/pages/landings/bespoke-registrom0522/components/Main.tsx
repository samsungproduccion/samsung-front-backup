import FormBspoke from "./FormBspoke";

const Main = () => {
  return (
    <div className="main-section">
      <h3 className="common-title text-center form-text text-center">
        Si ya compraste un televisor, regístralo para enviarte tu código Direct
        TV
      </h3>
      <p className="paragraph text-center">
        Todos los campos con (*) son obligatorios
      </p>
      <FormBspoke />
    </div>
  );
};
export default Main;
