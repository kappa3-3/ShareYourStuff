import React, { useState } from 'react';
import { NavLink, withRouter, Redirect } from 'react-router-dom';
import { Link } from 'react-scroll';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { navigationDataHome } from '../../commons/navigationDataHome';
import { setUserLoggedOut } from '../../actions/index';
import LogOutPrompt from '../LogOutPrompt';
import './style.scss';

function NavBar({
  isLoggedIn,
  page,
  setLoggedOut,
}) {
  const [logOutPrompt, setLogOutPrompt] = useState(false);
  const handleLogOut = e => {
    e.preventDefault();
    setLoggedOut();
    window.localStorage.setItem('user', false);
    setLogOutPrompt(true);
    setTimeout(() => setLogOutPrompt(false), 3000);
  };
  return (
    <>
      {logOutPrompt && <Redirect to="/" />}
      <LogOutPrompt active={logOutPrompt} />
      <div className="header-nav">
        <div className="header-nav-account">
          {isLoggedIn
            ? (
              <>
                <span className="login-error-message">You are logged in</span>
                <NavLink
                  to="/"
                  className="header-nav-account-link"
                  onClick={handleLogOut}
                >
                  Sign Out
                </NavLink>
              </>
            ) : (
              <>
                <NavLink
                  to="/"
                  className="header-nav-account-link"
                >
                  Home
                </NavLink>
                <NavLink
                  to="/login"
                  className="header-nav-account-link"
                >
                  Sign In
                </NavLink>
                <NavLink
                  to="/register"
                  className="header-nav-account-link"
                >
                  Create Account
                </NavLink>
              </>
            )}
          {page === 'donate-page'
            && <NavLink to="/" className="header-nav-account-link">Home</NavLink>}
          {(page === 'home-page' && isLoggedIn)
            && <NavLink to="/donate" className="header-nav-account-link">Donate</NavLink>}
        </div>
        <ul className="header-nav-sub-pages">
          {(page === 'home-page')
            && (
              <>
                <li>
                  <NavLink to="/" className="header-nav-sub-pages-link">Start</NavLink>
                </li>
                {navigationDataHome.map(item => (
                  <li key={item.title}>
                    <Link
                      to={item.to}
                      className="header-nav-sub-pages-link"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </>
            )}
          {page === 'donate-page'
            && (
              <>
                <li>
                  <Link to="contact-container" className="header-nav-sub-pages-link">Contact</Link>
                </li>
                <li>
                  <Link to="donate-steps-container" className="header-nav-sub-pages-link">Donate</Link>
                </li>
              </>
            )}
        </ul>
      </div>
    </>
  );
}

function mapStateToProps(state) {
  return {
    isLoggedIn: state.authentication,
  };
}

NavBar.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  page: PropTypes.string.isRequired,
  setLoggedOut: PropTypes.func.isRequired,
};

export default withRouter(connect(mapStateToProps, {
  setLoggedOut: setUserLoggedOut,
})(NavBar));
