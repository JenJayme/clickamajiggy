import React from 'react';
import logo from './logo.svg';
import './App.css';
import HelloNavbar from './components/Navbar';
import ArtBlock from './components/Card';
import { Container, Row, Col } from 'react-bootstrap';


function App() {
  console.log('Engaging app.js...');
  return (

    <div className="App">
    <HelloNavbar />
      <header className="App-header">
        <h1>Clickamajiggy</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>Click on an image to earn points, but don't click on any more than once!</p>
      </header>
      <Container>
        <div>
          <ArtBlock />
        </div>
      </Container>
    </div>
  );
};

export default App;
