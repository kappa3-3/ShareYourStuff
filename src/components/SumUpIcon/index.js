import React from 'react';
import PropTypes from 'prop-types';

const SumUpIcon = ({ src }) => (
  <th className="donate-sump-up-th">
    <img
      className="sum-up-icon"
      src={src}
      alt=""
    />
  </th>
);

SumUpIcon.propTypes = {
  src: PropTypes.string.isRequired,
};

export default SumUpIcon;
