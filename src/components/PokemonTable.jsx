import React from "react";
import { observer } from "mobx-react";

import PokemonRow from "./PokemonRow";
import store from "../store";

function PokemonTable() {
  return (
    <table width='100%'>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Tipo</th>
        </tr>
      </thead>
      <tbody>
        {store.filteredPokemon.map((cadapokemon) => (
          <PokemonRow
            key={cadapokemon.id}
            pokemon={cadapokemon}
            onClick={(cadapokemon) => store.setSelectedPokemon(cadapokemon)}
          />
        ))}
      </tbody>
    </table>
  );
}

export default observer(PokemonTable);
