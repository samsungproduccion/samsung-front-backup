import { ErrorMessage, Field, useFormikContext } from "formik";
import { ChangeEvent, useState } from "react";
import {
  states,
  cities,
  districts,
  getState,
  getCity
} from "../../utils/locations";


const Locations = ({stateName='state', cityName='city', districtName='district'}) => {
  const formik = useFormikContext<any>();

  const [state, setState] = useState("");
  const [city, setCity] = useState("");

  const cambiarEstados = (e: ChangeEvent<HTMLSelectElement>) => {
    const index = e.target.selectedIndex;
    // const selected = e.target.options[index];
    if (index !== 0) {
      const idState = getState("" + index);

      setState(idState);
      formik.setFieldValue("city", "");
      formik.setFieldValue("district", "");
    }
    formik.handleChange(e);
  };

  const cambiarCiudades = (e: ChangeEvent<HTMLSelectElement>) => {
    const index = e.target.selectedIndex;
    if (index !== 0) {
      const idCity = getCity(state, "" + index);

      setCity(idCity);
      formik.setFieldValue("district", "");
      formik.handleChange(e);
    }
    formik.handleChange(e);
  };

  return (
    <>
      <div className="ch-ff__field">
        <label htmlFor={stateName}>Departamento (*)</label>
        <Field
          as="select"
          label="Departamento"
          name={stateName}
          id={stateName}
          onChange={cambiarEstados}
        >
          <option value="">Selecciona</option>
          {states
            ? states.map((state, index) => (
                <option key={index} value={state.name}>
                  {state.name}
                </option>
              ))
            : null}
        </Field>
        <ErrorMessage name={stateName} component="p" className="input---error" />
      </div>
      <div className="ch-ff__field">
        <label htmlFor={cityName}>Provincia (*)</label>
        <Field as="select" id={cityName} name={cityName} onChange={cambiarCiudades}>
          <option value="">Selecciona</option>
          {cities.map((city, index) => {
            if (city.id_state === state) {
              return (
                <option key={index} value={city.name}>
                  {city.name}
                </option>
              );
            } else {
              return null;
            }
          })}
        </Field>
        <ErrorMessage name={cityName} component="p" className="input---error" />
      </div>
      <div className="ch-ff__field">
        <label htmlFor={districtName}>Distrito (*)</label>
        <Field as="select" name={districtName} id={districtName}>
          <option value="">Selecciona</option>
          {districts.map((district, index) => {
            if (district.codeCity === city && district.codeState === state) {
              return (
                <option key={index} value={district.name}>
                  {district.name}
                </option>
              );
            } else {
              return null;
            }
          })}
        </Field>
        <ErrorMessage name={districtName} component="p" className="input---error" />
      </div>
    </>
  );
};
export default Locations;
