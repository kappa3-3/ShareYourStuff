import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './pages/Home'
import CreateAccount from "./pages/CreateAccount";
import SignIn from "./pages/SignIn";
import Donate from "./pages/Donate";
import Error from "./pages/Error";

const Routing = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={SignIn} />
      <Route path="/register" component={CreateAccount} />
      <Route path="/donate" component={Donate} />
      <Route path="/error" component={Error} />
    </Switch>
  </Router>
);


export default Routing;
