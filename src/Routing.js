import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import Home from './pages/Home'
import CreateAccount from "./pages/CreateAccount";
import SignIn from "./pages/SignIn";
import {Donate} from "./pages/Donate";

export default function Routing() {

    return (
        <Router>
            <div>
                <Route exact path="/" component={ Home } />
                <Switch>
                    <Route path="/login" component={ SignIn } />
                    <Route path="/register" component={ CreateAccount } />
                    <Route path="/donate" component={ Donate } />
                </Switch>
            </div>
        </Router>
    );
}
