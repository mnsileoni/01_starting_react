import React from "react";
import useStore from "../store";

import PokemonType from "../PokemonType";

const PokemonInfo = () => {
  const selectedPokemon = useStore((state) => state.selectedPokemon);

  return selectedPokemon ? (
    <div>
      <h2>{selectedPokemon.name.english}</h2>
      <table>
        <tbody>
          {Object.keys(selectedPokemon.base).map((clave) => (
            <tr key={clave}>
              <td>{clave}</td>
              <td>{selectedPokemon.base[clave]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  ) : null;
};

PokemonInfo.protoTypes = PokemonType;

export default PokemonInfo;
