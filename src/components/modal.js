import React from "react";
import { render } from 'react-dom';
import { Accordion, Card, Button } from 'react-bootstrap';

function SurpriseDiv() {
    console.log("Running SurpriseDiv function...");

    function hideDiv () {
        var surpriseDiv = document.getElementById("surpriseDiv");
        surpriseDiv.classList.add("hidden");    
    }

    return (
        <div id="surpriseDiv" className="hidden">
            <Accordion>
                <Card className="surpriseDiv">
                    <Card.Header>
                        <h1>Well, Aren't You Fabulous?</h1>
                        <Accordion.Toggle as={Card.Header} variant="link" eventKey="0">
                            <span id="clickMe">Click me!</span>
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body><img id="surpriseImg" src="https://media.giphy.com/media/s2qXK8wAvkHTO/giphy.gif"></img>
                        <div>
            <Button id="closeDivBtn" onClick={hideDiv}>Oh Behave!</Button></div>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        </div>
    )
}

export default SurpriseDiv; 