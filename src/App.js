import React from 'react';
import react, { Component } from 'react';
import './App.css';
import Covid from "./component/Covid";

import Logo from './Assets/1578103108457.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
         <img src={Logo} alt="Logo da Empresa" className="logo_img" />
         <h2 className="titulo">NCB Sistemas Embarcados</h2>
         <p className="titulo2">Proficiência  em desenvolvimento.</p>
         <hr />
         <Covid />
      </header>
    </div>
  );
 

}

export default App;
