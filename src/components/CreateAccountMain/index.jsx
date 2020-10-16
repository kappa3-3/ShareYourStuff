import React, { useState } from 'react';
import { connect } from 'react-redux';
import { NavLink, withRouter, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { setUserLoggedIn } from '../../actions';
import ExistUserPrompt from '../ExistUserPrompt';
import AccountActionHeader from '../AccountActionHeader';
import InputErrorMsg from '../InputErrorMsg';
import serverConnection from '../../commons/fetch/serverConnection';
import './style.scss';

function CreateAccountMain({ authentication, setLoggedIn }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passCopy, setPassCopy] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPassValid] = useState(true);
  const [isPasswordCopyValid, setIsPassCopyValid] = useState(true);
  const [isUserInDb, setIsUserInDb] = useState(false);

  const onClickSubmit = e => {
    e.preventDefault();
    if (isEmailValid && isPasswordValid && isPasswordCopyValid) {
      serverConnection('signup', { email, password })
        .then(res => {
          if (!res.isExisting) return setLoggedIn();
          return setIsUserInDb(true);
        })
        .catch(err => { throw (err); });
    }
  };
  const promptHandler = () => {
    setIsUserInDb(false);
  };
  return (
    <>
      {authentication && <Redirect to="/donate" />}
      {isUserInDb && <ExistUserPrompt visibility={promptHandler} />}
      <form className="sign-in-container">
        <AccountActionHeader desc="Create Account" />
        <div className="sign-in-credentials">
          <div className="sign-in-credentials-email">
            <label htmlFor="credentials-email">
              Email:
            </label>
            <input
              className="credentials-input"
              type="email"
              id="credentials_email"
              name="email"
              placeholder="type your email address"
              value={email}
              onChange={e => setEmail(e.target.value)}
              onBlur={() => setIsEmailValid(email.includes('@'))}
            />
            {!isEmailValid && <InputErrorMsg msg="Incorrect e-mail address" />}
          </div>
          <div className="sign-in-credentials-password">
            <label htmlFor="credentials_password">
              Password:
            </label>
            <input
              className="credentials-input"
              type="password"
              id="credentials_password"
              name="password"
              placeholder="type your password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              onBlur={() => setIsPassValid(password.length >= 6)}
            />
            {!isPasswordValid && <InputErrorMsg msg="Password requires at least 6 characters" />}
          </div>
          <div className="sign-in-credentials-password">
            <label htmlFor="passCopy">
              Repeat password:
            </label>
            <input
              className="credentials-input"
              type="password"
              id="credentials_passCopy"
              name="passCopy"
              placeholder="retype your password"
              value={passCopy}
              onChange={e => setPassCopy(e.target.value)}
              onBlur={() => setIsPassCopyValid(password === passCopy)}
            />
            {!isPasswordCopyValid && <InputErrorMsg msg="Passwords are not the same" />}
          </div>
        </div>
        <div className="sign-in-actions">
          <NavLink to="/login" className="sign-in-button">
            Sign in
          </NavLink>
          <button
            type="submit"
            disabled={!(
              isEmailValid
              && isPasswordValid
              && isPasswordCopyValid
              && email
              && password
              && passCopy
            )}
            onClick={onClickSubmit}
            className="create-account-button"
          >
            Create account
          </button>
        </div>
      </form>
    </>
  );
}

function mapStateToProps(state) {
  return {
    authentication: state.authentication,
  };
}
CreateAccountMain.propTypes = {
  authentication: PropTypes.bool.isRequired,
  setLoggedIn: PropTypes.func.isRequired,
};

export default withRouter(connect(
  mapStateToProps,
  {
    setLoggedIn: setUserLoggedIn,
  },
)(CreateAccountMain));
