import React from "react";
import {
    BrowserRouter as Router,
} from "react-router-dom";
import Home from './components/Home'

export default function Routing() {

    return (
        <Router>
            <div>
                <Home />
            </div>
        </Router>
    );
}
