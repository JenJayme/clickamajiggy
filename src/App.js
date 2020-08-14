import React, { useState } from "react";
import logo from './logo.svg';
import './App.css';
import HelloNavbar from './components/Navbar';
import ArtBlock from './components/gallery';
import { Container } from 'react-bootstrap';
import ArtContext from "./utils/ArtContext";

function App() {
  console.log('Engaging app.js...');
  const [ArtState, setArtState] = useState({
    name: "",
    artURL: ""
  });
  return (

    <div className="App">
    <HelloNavbar />
      <header className="App-header">
        <p>Click on an image to earn points, but don't click on any more than once!</p>
      </header>
      <Container>
      <ArtContext.Provider>
        <div>
          <ArtBlock />
        </div>
        </ArtContext.Provider>
        <p></p>
      </Container>
      <div className="footer">
      </div>
    </div>
  );
};

export default App;
