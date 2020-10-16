import React from 'react';
import PropTypes from 'prop-types';

const SumUpDetail = ({ item }) => (
  <tr>
    <th className="donate-details-th">
      {item.label}
      &nbsp;
    </th>
    <td className="donate-details-td">
      {item.value}
    </td>
  </tr>
);

SumUpDetail.propTypes = {
  item: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.string.isRequired,
      PropTypes.number.isRequired,
    ]),
  ),
};

SumUpDetail.defaultProps = {
  item: {},
};

export default SumUpDetail;
