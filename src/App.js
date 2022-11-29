import React from 'react';
import styled from '@emotion/styled';
import CssBaseline from '@mui/material/CssBaseline';

import PokemonInfo from './components/PokemonInfo';
import PokemonFilter from './components/PokemonFilter';
import PokemonTable from './components/PokemonTable';
import PokemonContext from './PokemonContext';

import './App.css';

const Title = styled.h1`
  text-align: center;
`;

const TwoColumnLayout = styled.div`
  display: grid;
  grid-template-columns: 70% 30%;
  grid-column-gap: 1rem;
`;

const Container = styled.div`
  margin: auto;
  width: 600px;
  padding-top: 0rem;
`;


function App() {
  const [filter, filterSet] = React.useState("");
  const [pokemon, pokemonSet] = React.useState([]);
  const [selectedItem, selectedItemSet] = React.useState("");

  React.useEffect(() => {
    fetch("http://localhost:3000/01_starting_react/pokemon.json")
      .then((resp) => resp.json())
      .then((data) => pokemonSet(data));
  }, []); //puesto que el elemento monitoreado es vacio este proceso se ejecuta la primera vez que se ejecuta el codigo y luego ignora cualquier cambio 
  
  return (
    <PokemonContext.Provider value = {{filter, filterSet, pokemon, pokemonSet, selectedItem, selectedItemSet}}>
      <Container>
        <CssBaseline/>
        <Title>Pokemon Search</Title>
        <TwoColumnLayout>
          <div>
            <PokemonFilter/>
            <PokemonTable />
          </div>
          <PokemonInfo />
        </TwoColumnLayout>
        </Container>
      </PokemonContext.Provider>
  );
}

export default App;
