import React from 'react';
import PropTypes from 'prop-types';
import './App.css';
import pokemon from './pokemon.json';

const PokemonRow = ({cadapokemon}) => (
            <tr>
              <td>{cadapokemon.name.english}</td>
              <td>{cadapokemon.type.join(', ')}</td>
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
};

function App() {

  const divStyle = { // el estilo 
    margin: "auto",
    width: 800,
    paddingTop: "1rem",
  };

  return (
    <div  style={divStyle}>
      <h1 className="title">Pokemon Search</h1>
      <table width="100%">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Tipo</th>
          </tr>
        </thead>
        <tbody>
          {pokemon.slice(0, 25).map(cadapokemon => (
            <PokemonRow key={cadapokemon.id} cadapokemon={cadapokemon}/>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
