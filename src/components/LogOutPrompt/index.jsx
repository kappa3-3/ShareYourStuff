import React from 'react';
import PropTypes from 'prop-types';
import decoration from '../../assets/icons/Decoration.svg';
import './style.scss';

const LogOutPrompt = ({ active }) => (
  active
  && (
    <div className="header-logout-container">
      <div className="header-logout-prompt">
        <h1>You have been logged out successfully!</h1>
        <img src={decoration} alt="decoration" />
        <span>you are being redirected to HOME page</span>
      </div>
    </div>
  )
);

LogOutPrompt.propTypes = {
  active: PropTypes.bool.isRequired,
};

export default LogOutPrompt;
