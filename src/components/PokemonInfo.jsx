import React, { useContext } from "react";
import PokemonType from "../PokemonType";
import PokemonContext from "../PokemonContext";

const PokemonInfo = () => {
  const { selectedItem } = useContext(PokemonContext);
  return selectedItem ? (
    <div>
      <h1>{selectedItem.name.english}</h1>
      <table>
        {Object.keys(selectedItem.base).map((clave) => (
          <tr key={clave}>
            <td>{clave}</td>
            <td>{selectedItem.base[clave]}</td>
          </tr>
        ))}
      </table>
    </div>
  ) : null;
};

PokemonInfo.protoTypes = PokemonType;

export default PokemonInfo;
