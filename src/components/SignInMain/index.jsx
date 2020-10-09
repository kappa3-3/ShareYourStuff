import React, { useState } from 'react';
import { NavLink, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setUserLoggedIn } from '../../actions/index';
import AccountActionHeader from '../AccountActionHeader';
import serverConnection from '../../commons/fetch/serverConnection';
import './style.scss';

function SignInMain({ isLoggedIn, setLoggedIn }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [isUserInDb, setIsUserInDb] = useState(true);
  const [isPassOkInDb, setIsPassOkInDb] = useState(true);

  const isFormValid = () => {
    setIsEmailValid(email.includes('@'));
    setIsPasswordValid(password.length >= 6);
  };

  const handleDBResponse = res => {
    setIsPassOkInDb(true);
    if (res.isExisting) {
      res.password ? setLoggedIn(true) : setIsPassOkInDb(false);
    } else {
      setIsUserInDb(false);
    }
  };

  const onFormSubmit = e => {
    e.preventDefault();
    isFormValid();
    if (isEmailValid && isPasswordValid) {
      serverConnection('signin', email, password)
        .then(res => handleDBResponse(res))
        .catch(err => { throw (err); });
    } else {
      setIsPasswordValid(false);
    }
  };

  return (
    <form className="sign-in-container">
      {isLoggedIn && <Redirect to="/donate" />}
      <AccountActionHeader desc="Sign In" />
      <div className="sign-in-credentials">
        <div className="sign-in-credentials-email">
          <label htmlFor="sign_in_email">
            Email:
          </label>
          <input
            className="credentials-input"
            type="email"
            id="sign_in_email"
            name="email"
            placeholder="type your email address"
            value={email}
            onChange={e => setEmail(e.target.value)}
            onBlur={() => setIsEmailValid(email.includes('@'))}
          />
          {!isEmailValid && <span className="credentials-error-message">Incorrect e-mail address</span>}
        </div>
        <div className="sign-in-credentials-password">
          <label htmlFor="sign_in_password">
            Password:
          </label>
          <input
            className="credentials-input"
            type="password"
            id="sign_in_password"
            name="password"
            placeholder="type your password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            onBlur={() => setIsPasswordValid(password.length >= 6)}
          />
          {!isPasswordValid && <span className="credentials-error-message">Password requires at least 6 characters</span>}
          {!isPassOkInDb && <span className="credentials-error-message">Password doen&apos;t match e-mail address.</span>}
          {!isUserInDb && <span className="credentials-error-message">User with given email address is not in database.</span>}
        </div>
      </div>
      <div className="sign-in-actions">
        <NavLink to="/register" className="create-account-button">Create Account</NavLink>
        <button
          type="button"
          className="sign-in-button"
          disabled={!(email.length > 2 && password.length > 5)}
          onClick={onFormSubmit}
        >
          Sign in
        </button>
      </div>
    </form>
  );
}

function mapStateToProps(state) {
  return {
    isLoggedIn: state.authentication,
  };
}

SignInMain.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  setLoggedIn: PropTypes.func.isRequired,
};

export default withRouter(connect(mapStateToProps, { setLoggedIn: setUserLoggedIn })(SignInMain));
