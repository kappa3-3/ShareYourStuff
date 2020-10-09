import React from 'react';
import PropTypes from 'prop-types';
import decoration from '../../assets/icons/Decoration.svg';

const AccountActionHeader = ({ desc }) => (
  <>
    <h1 className="sign-in-headline">
      {desc}
    </h1>
    <img
      src={decoration}
      alt="/////////"
    />
  </>
);

AccountActionHeader.propTypes = {
  desc: PropTypes.string.isRequired,
};

export default AccountActionHeader;
