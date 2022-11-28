import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import './App.css';
//import pokemon from '../public/pokemon.json';// Module not found: Error: You attempted to import ../public/pokemon.json which falls outside of the project src/ directory. Relative imports outside of src/ are not supported.
//You can either move it inside src/, or add a symlink to it from project's node_modules/.

const PokemonRow = ({cadapokemon, siSelecciono}) => (
  <tr>
    <td>{cadapokemon.name.english}</td>
    <td>{cadapokemon.type.join(', ')}</td>
    <td>
      <button onClick={() => siSelecciono(cadapokemon)}>Seleccionar</button>
    </td>
  </tr>
)
// Con propTypes verificamos que los tipos de datos esperados se cumplan.
// Si no se cumplen aparece el error en consola del browser
PokemonRow.propTypes = {
  cadapokemon: PropTypes.shape({
    name: PropTypes.shape({
      english: PropTypes.string
    }).isRequired,
    type: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  siSelecciono: PropTypes.func,
};

const PokemonInfo = ({ name, base }) => (
  <div>
    <h1>{name.english}</h1>
    <table>
      {Object.keys(base).map((clave) => (
        <tr key={clave}>
          <td>{clave}</td>
          <td>{base[clave]}</td>
        </tr>
      ))}
    </table>
  </div>
);

PokemonInfo.propTypes = {
  cadapokemon: PropTypes.shape({
    name: PropTypes.shape({
      english: PropTypes.string
    }).isRequired,
    base: PropTypes.shape({
      HP: PropTypes.number.isRequired,
      Attack: PropTypes.number.isRequired,
      Defense: PropTypes.number.isRequired,
      "Sp. Attack": PropTypes.number.isRequired,
      "Sp. Defense": PropTypes.number.isRequired,
      Speed: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};

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

const Input = styled.input`
  width: 100%;
  font-size: x-large;
  padding: 0.2rem;
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
    <Container>
      <Title>Pokemon Search</Title>
      <TwoColumnLayout>
        <div>
      <Input
        type="text"
        value={filter}
            onChange={(evento) => filterSet(evento.target.value)} />
                  <table width="100%">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Tipo</th>
          </tr>
        </thead>
        <tbody>
          {pokemon.filter((unpokemon)=> unpokemon.name.english.toLowerCase().includes(filter.toLowerCase())).slice(0, 25).map(cadapokemon => (
            <PokemonRow key={cadapokemon.id} cadapokemon={cadapokemon} siSelecciono={(cadapokemon) => selectedItemSet(cadapokemon) } />
          ))}
        </tbody>
      </table>

        </div>
        {selectedItem && <PokemonInfo {...selectedItem}/>}
      </TwoColumnLayout>
    </Container>
  );
}

export default App;
