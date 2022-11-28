import React from 'react';
import './App.css';

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
          <tr>
            <td>NombrePokemon</td>
            <td>Poderes, muchos</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
