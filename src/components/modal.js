import React from "react";
import { render } from 'react-dom';
import { Accordion, Card, Button } from 'react-bootstrap';

function SurpriseDiv() {
    console.log("Running SurpriseDiv function...");

    return (
        <div id="surprise" className="hidden">
            <Accordion>
                <Card className="surpriseDiv">
                    <Card.Header>
                        <h1>Surprise!</h1>
                        <Accordion.Toggle as={Button} variant="link" eventKey="0">
                            Click me!
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body><h3>You're Fabulous!</h3> <br></br>
                    <img id="surpriseImg" src="https://media.giphy.com/media/s2qXK8wAvkHTO/giphy.gif"></img>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        </div>
    )
}

export default SurpriseDiv; 