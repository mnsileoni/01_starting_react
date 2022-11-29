import React from "react";
import { useSelector } from "react-redux";
import PokemonType from "../PokemonType";

const PokemonInfo = () => {
  const selectedItem = useSelector((state) => state.selectedItem);

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
