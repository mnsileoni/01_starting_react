import React from "react";
import { observer } from "mobx-react";

import store from "../store";

import PokemonType from "../PokemonType";

const PokemonInfo = () => {
  return store.selectedPokemon ? (
    <div>
      <h2>{store.selectedPokemon.name.english}</h2>
      <table>
        <tbody>
          {Object.keys(store.selectedPokemon.base).map((clave) => (
            <tr key={clave}>
              <td>{clave}</td>
              <td>{store.selectedPokemon.base[clave]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  ) : null;
};

PokemonInfo.protoTypes = PokemonType;

export default observer(PokemonInfo);
