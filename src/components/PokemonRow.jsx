import React from "react";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import PokemonType from "../PokemonType";

const PokemonRow = ({ pokemon, onClick }) => (
  <>
    <tr>
      <td>{pokemon.name.english}</td>
      <td>{pokemon.type.join(", ")}</td>
      <td>
        <Button
          variant='contained'
          color='secondary'
          endIcon={<SendIcon />}
          onClick={() => onClick(pokemon)}
        >
          Detalles
        </Button>
      </td>
    </tr>
  </>
);

PokemonRow.propTypes = {
  pokemon: PokemonType,
};

export default PokemonRow;
