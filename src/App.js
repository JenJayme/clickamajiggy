import React, { useState } from "react";
import logo from './components/logo/logo.png';
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
      {/* <header className="App-header">        
      </header> */}
      <Container>
        <SurpriseDiv />
        <ArtBlock />
      </Container>
    </div>
  );
};

export default App;
