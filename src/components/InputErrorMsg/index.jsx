import React from 'react';
import PropTypes from 'prop-types';

const InputErrorMsg = ({ msg }) => (
  <span className="sign-in-error-message">
    {msg}
  </span>
);

InputErrorMsg.propTypes = {
  msg: PropTypes.string.isRequired,
};

export default InputErrorMsg;
