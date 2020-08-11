import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import Button from 'react-bootstrap/Button';


function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">
                Clickamajiggy
            </Link>
            <div className="center">
                <h1>Click an image to begin!</h1>
            </div>
            <div className="right">
                Score: 0 | Top Score: 0
            </div>
        </nav>
    )
}

export default Navbar;