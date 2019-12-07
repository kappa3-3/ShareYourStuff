import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import Home from './pages/Home'
import Account from './pages/SignIn'
import CreateAccount from "./pages/CreateAccount";
import SignIn from "./pages/SignIn";

export default function Routing() {

    return (
        <Router>
            <div>
                <Route exact path="/" component={ Home } />
                <Switch>
                    <Route path="/login" component={ SignIn } />
                    <Route path="/register" component={ CreateAccount } />
                </Switch>
            </div>
        </Router>
    );
}
