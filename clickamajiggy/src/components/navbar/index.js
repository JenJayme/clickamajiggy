//NAVBAR INDEX.JS
import React from "react";
import Navbar from 'react-bootstrap/Navbar'

function HelloNavbar() {
    console.log("Engaging navbar index.js...");
    return (
        <div>
            <Navbar className="navbar" bg="purple" expand="lg">
                <div className="col">
                    <h1 className="brand">Clickamajiggy</h1>
                </div>
                <div className="col">
                    <h4 className="center">Click an image to begin</h4>
                </div>
                <div className="col">
                    <h3 className="right">Score: 0 | Top Score: 0</h3>
                </div>
            </Navbar>
        </div>
    )
}

export default HelloNavbar;