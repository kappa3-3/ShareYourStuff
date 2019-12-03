import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import Home from './components/Home'
import LogIn from './components/LogIn'
import Register from './components/Register'

export default function Routing() {

    return (
        <Router>
            <div>
                <Home />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/login" component={LogIn} />
                    <Route path="/register" component={Register} />
                </Switch>
            </div>
        </Router>
    );
}
