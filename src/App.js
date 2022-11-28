import React from 'react';
import PropTypes from 'prop-types';
import './App.css';
import pokemon from './pokemon.json';

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

function App() {
  const [filter, filterSet] = React.useState("");
  const [selectedItem, selectedItemSet] = React.useState("");

  const divStyle = { // el estilo 
    margin: "auto",
    width: 800,
    paddingTop: "1rem",
  };

  return (
    <div  style={divStyle}>
      <h1 className="title">Pokemon Search</h1>

      <div style={{
        display: "grid",
        gridTemplateColumns: "70% 30%",
        gridColumnGap: '1rem',
      }}>
        <div>
      <input
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
      </div>
    </div>
  );
}

export default App;
