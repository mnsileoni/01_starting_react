import React, { useContext } from "react";

import PokemonRow from "./PokemonRow";
import PokemonContext from "../PokemonContext";

const PokemonTable = () => {
  const {
    state: { pokemon, filter },
    dispatch,
  } = useContext(PokemonContext);
  return (
    <table width='100%'>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Tipo</th>
        </tr>
      </thead>
      <tbody>
        {pokemon
          .filter(({ name: { english } }) =>
            english.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
          )
          .slice(0, 25)
          .map((cadapokemon) => (
            <PokemonRow
              key={cadapokemon.id}
              cadapokemon={cadapokemon}
              siSelecciono={(cadapokemon) =>
                dispatch({
                  type: "SET_SELECTED_POKEMON",
                  payload: cadapokemon,
                })
              }
            />
          ))}
      </tbody>
    </table>
  );
};

export default PokemonTable;
