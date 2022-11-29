import React, { useContext } from "react";
import styled from "@emotion/styled";
import PokemonContext from "../PokemonContext";

const Input = styled.input`
  width: 100%;
  font-size: x-large;
  padding: 0.2rem;
`;

const PokemonFilter = () => {
  const {
    state: { filter },
    dispatch,
  } = useContext(PokemonContext);
  return (
    <Input
      type='text'
      value={filter}
      onChange={(evento) =>
        dispatch({
          type: "SET_FILTER",
          payload: evento.target.value,
        })
      }
    />
  );
};

export default PokemonFilter;
