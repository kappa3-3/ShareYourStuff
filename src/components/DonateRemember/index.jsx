import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

export default function DonateRemember({ active }) {
  const message = () => {
    switch (active) {
      case 1:
        return 'Fill in all the details about your package.It will let us know who should we support.';
      case 2:
        return 'All the items pack in 60l trash bags. More information how to pack the items you can find under the LINK.';
      case 3:
        return 'You can type in specific organization you have in mind. You can also search for one in a dropdown menu.';
      case 4:
        return 'Put in the pick up address and time.';
      default:
        return '';
    }
  };
  return (
    <>
      <div className="donate-remember-warning">
        <h1>Remember!</h1>
        <span>{message()}</span>
      </div>
    </>
  );
}

DonateRemember.propTypes = {
  active: PropTypes.number.isRequired,
};
