import React from "react";
import useStore from "../store";

import PokemonRow from "./PokemonRow";

const PokemonTable = () => {
  const pokemon = useStore((state) => state.pokemon);
  const filter = useStore((state) => state.filter);
  const setSelectedPokemon = useStore((state) => state.setSelectedPokemon);

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
              siSelecciono={(cadapokemon) => setSelectedPokemon(cadapokemon)}
            />
          ))}
      </tbody>
    </table>
  );
};

export default PokemonTable;
