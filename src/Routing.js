import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './pages/Home'
import CreateAccount from "./pages/CreateAccount";
import SignIn from "./pages/SignIn";
import Donate from "./pages/Donate";
import HomeUp from './components/HomeUp';

export default function Routing() {
  const [scrollTop, setScrollTop] = useState(0);
  const myRef = React.createRef();
  const onScroll = () => {
    const scrollTopV = myRef.current.scrollTop;
    setScrollTop(scrollTopV);
  }
  return (
    <div
      className="ref-wrapper"
      ref={myRef}
      onScroll={onScroll}
    >
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={SignIn} />
          <Route path="/register" component={CreateAccount} />
          <Route path="/donate" component={Donate} />
        </Switch>
        <HomeUp scrollY={scrollTop} />
      </Router>

    </div>
  );
}
