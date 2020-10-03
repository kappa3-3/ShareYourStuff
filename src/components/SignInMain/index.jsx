import React, { useEffect, useState } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setUserStatus } from '../../actions/index';
import decoration from '../../assets/icons/Decoration.svg';
import './style.scss';

function SignInMain({ isLoggedIn, history, setUser }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [isUserTrue, setIsUserTrue] = useState(true);

  useEffect(() => {
    isLoggedIn && history.push('/donate');
  }, [isLoggedIn, history]);

  const onInputChange = e => {
    switch (e.target.name) {
      case 'email':
        return setEmail(e.target.value);
      case 'password':
        return setPassword(e.target.value);
      default:
        return false;
    }
  };

  const isFormValid = () => {
    setIsEmailValid(email.includes('@'));
    setIsPasswordValid(password.length >= 6);
  };

  const onFormSubmit = e => {
    e.preventDefault();
    isFormValid();
    if (isEmailValid && isPasswordValid) {
      setUser(email, password);
      setTimeout(() => setIsUserTrue(false), 400);
    }
  };

  return (
    <form className="sign-in-container" onSubmit={onFormSubmit}>
      <h1 className="sign-in-headline">Sign In</h1>
      <img src={decoration} alt="/////////" />
      <div className="sign-in-credentials">
        <div className="sign-in-credentials-email">
          <label htmlFor="sign_in_email">Email:</label>
          <input
            className="credentials-input"
            type="email"
            id="sign_in_email"
            name="email"
            placeholder="type your email address"
            value={email}
            onChange={onInputChange}
          />
          {!isEmailValid && <span className="credentials-error-message">Incorrect e-mail address</span>}
        </div>
        <div className="sign-in-credentials-password">
          <label htmlFor="sign_in_password">Password:</label>
          <input
            className="credentials-input"
            type="password"
            id="sign_in_password"
            name="password"
            placeholder="type your password"
            value={password}
            onChange={onInputChange}
          />
          {!isPasswordValid && <span className="credentials-error-message">Password requires at least 6 characters</span>}
          {!isUserTrue && <span className="credentials-error-message">Password or e-mail address is incorrect.</span>}
        </div>
      </div>
      <div className="sign-in-actions">
        <NavLink to="/register" className="create-account-button">Create Account</NavLink>
        <button type="submit" className="sign-in-button">Sign in</button>
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
  history: PropTypes.objectOf(PropTypes.string.isRequired),
  setUser: PropTypes.bool.isRequired,
};

export default withRouter(connect(mapStateToProps, { setUser: setUserStatus })(SignInMain));
