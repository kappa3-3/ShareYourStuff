import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import decoration from '../../assets/icons/Decoration.svg';

const ExistUserPrompt = ({ visibility }) => (
  <div className="header-logout-container">
    <div className="header-logout-prompt">
      <h1>The email address already exists in the database</h1>
      <img src={decoration} alt="/////////" />
      <h4>Sing in instead or try again with a different email address</h4>
      <div>
        <Link to="/login" className="sign-in-button">
          Sign in
        </Link>
        <button
          onClick={visibility}
          className="sign-in-button"
          type="button"
        >
          Try again
        </button>
      </div>
    </div>
  </div>
);

ExistUserPrompt.propTypes = {
  visibility: PropTypes.func.isRequired,
};

export default ExistUserPrompt;
