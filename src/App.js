import React, { useState } from "react";
import logo from './logo.svg';
import './App.css';
import HelloNavbar from './components/Navbar';
import ArtBlock from './components/gallery';
import { Container } from 'react-bootstrap';
import SurpriseDiv from "./components/modal";
// import ArtContext from "./utils/ArtContext";

function App() {

  return (

    <div className="App">
      <HelloNavbar />
      <header className="App-header">        
      </header>
      <Container>
        <div><SurpriseDiv />
          <ArtBlock />
        </div>
        <p></p>
      </Container>
      <div className="footer">
      </div>
    </div>
  );
};

export default App;
