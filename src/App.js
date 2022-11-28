import React from 'react';
import './App.css';
import pokemon from './pokemon.json';

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
          {pokemon.slice(0,25).map(cadapokemon => ( 
          <tr key={cadapokemon.id}>
              <td>{cadapokemon.name.english}</td>
              <td>{cadapokemon.type.join(', ')}</td>
          </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
