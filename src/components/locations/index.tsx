import { RefObject, useRef, useState } from "react";
import { states, cities, districts } from "../../utils/locations";

const Locations = () => {
  const [errorLocation, setErrorLocation] = useState<boolean>(false);

  // console.log({ errorLocation });

  const [state, setState] = useState({
    id: "",
    name: "",
  });
  const [city, setCity] = useState({
    id: "",
    id_state: "",
    name: "",
  });
  const [district, setDistrict] = useState({
    id: "",
    name: "",
  });

  const stateRef = useRef<HTMLSelectElement>(null);
  const cityRef = useRef<HTMLSelectElement>(null);
  const districtRef = useRef<HTMLSelectElement>(null);

  const handleChange = (ref: RefObject<HTMLSelectElement>, type: string) => {
    if (ref.current !== null) {
      const index = ref.current.selectedIndex;
      const selected = ref.current.options[index];
      if (index!==0) {
        if (type === "state") {
          setCity({
            id: "",
            id_state: "",
            name: "",
          });
  
          setDistrict({
            id: "",
            name: "",
          });
  
          setState({
            ...state,
            id: selected.value,
            name: selected.text,
          });
        }
        if (type === "city") {
          setDistrict({
            id: "",
            name: "",
          });
  
          setCity({
            ...city,
            id: selected.value,
            id_state: state.id,
            name: selected.text,
          });
        }
        if (type === "district") {
          setDistrict({
            ...district,
            id: selected.value,
            name: selected.text,
          });
        }
      }
      
    }
  };
  return {
    Locationjsx: (
      <>
        <div className="ch-ff__field">
          <label htmlFor="state">Departamento (*)</label>
          <select
            ref={stateRef}
            name="state"
            id="state"
            defaultValue="0"
            onChange={() => handleChange(stateRef, "state")}
          >
            <option value="0">Selecciona</option>
            {states
              ? states.map((state, index) => (
                  <option key={index} value={state.id}>
                    {state.name}
                  </option>
                ))
              : null}
          </select>
          {(state.name === "" || state.name==="0") && errorLocation ? (
            <p className="input---error">El departamento es obligatorio</p>
          ) : null}
        </div>
        <div className="ch-ff__field">
          <label htmlFor="city">Provincia (*)</label>
          <select
            ref={cityRef}
            name="city"
            id="city"
            defaultValue="0"
            onChange={() => handleChange(cityRef, "city")}
          >
            <option value="0">Selecciona</option>
            {cities.map((city, index) => {
              if (city.id_state === state.id) {
                return (
                  <option key={index} value={city.id}>
                    {city.name}
                  </option>
                );
              } else {
                return null;
              }
            })}
          </select>
          {(city.name === "" || city.name==="")  && errorLocation ? (
            <p className="input---error">La provincia es obligatorio</p>
          ) : null}
        </div>
        <div className="ch-ff__field">
          <label htmlFor="district">Distrito (*)</label>
          <select
            ref={districtRef}
            name="district"
            id="district"
            defaultValue="0"
            onChange={() => handleChange(districtRef, "district")}
          >
            <option value="0">Selecciona</option>
            {districts.map((district, index) => {
              if (
                district.codeCity === city.id &&
                district.codeState === state.id
              ) {
                return (
                  <option key={index} value={district.id}>
                    {district.name}
                  </option>
                );
              } else {
                return null;
              }
            })}
          </select>
          {(district.name === "" || district.name === "0") && errorLocation ? (
            <p className="input---error">El distrito es obligatorio</p>
          ) : null}
        </div>
      </>
    ),
    state: state.name,
    city: city.name,
    district: district.name,
    error: setErrorLocation,
  };
};
export default Locations;
