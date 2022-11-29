import React from "react";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";

const PokemonRow = ({ cadapokemon, siSelecciono }) => (
  <tr>
    <td>{cadapokemon.name.english}</td>
    <td>{cadapokemon.type.join(", ")}</td>
    <td>
      <Button
        variant='contained'
        color='secondary'
        endIcon={<SendIcon />}
        onClick={() => siSelecciono(cadapokemon)}
      >
        Ver
      </Button>
    </td>
  </tr>
);

export default PokemonRow;
