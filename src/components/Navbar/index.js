//NAVBAR INDEX.JS
import React, { useState } from "react";
import Navbar from 'react-bootstrap/Navbar';
import ArtBlock from '../gallery';
import { Accordion, Card, Button } from 'react-bootstrap';


let currentScore = 0;

const addToScore = () => {
    currentScore = currentScore + 50;
    console.log("Adding to your score!  Current score:", currentScore);
    document.getElementById("currentScore").innerHTML = currentScore;
}


function HelloNavbar() {
    console.log("ArtBlock imports like this:", ArtBlock);
    const [currentScore, newScore] = useState(1);

    return (
        <div>
            <Navbar className="navbar" bg="purple" expand="lg">
                <div className="col">
                    <h1 className="brand" id="logo">Clickamajiggy</h1>
                </div>
                <div className="col">
                    {/* <h4 className="center">Click an image to begin</h4> */}
                    <Accordion className="directionsCard">
                        <Card className="directionsCard">
                            {/* <Card.Header> */}
                            <Accordion.Toggle as={Button} variant="link" eventKey="0" className="directionsCard">
                                Click for Directions
                        </Accordion.Toggle>
                            {/* </Card.Header> */}
                            <Accordion.Collapse eventKey="0">
                                <Card.Body><p className="directionsCard">The challenge of this game is to click all 16 images <strong>only once,</strong> without repeating an image. The longer your streak, the more easter eggs you'll find.  The game ends when you click the same image twice.</p>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                </div>
                <div className="col-3">
                    <h3 className="right">Score: <span className="score" id="currentScore" onClick={addToScore}>{currentScore}</span> | Top Score: 16</h3>
                </div>
            </Navbar>

        </div>
    )
}

export default HelloNavbar;