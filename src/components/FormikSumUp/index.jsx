import React from 'react';
import PropTypes from 'prop-types';
import bag from '../../assets/icons/Icon-2.svg';
import transport from '../../assets/icons/Icon-4.svg';

const FormikSumUp = ({ values }) => (
  <div className="donate-component-container">
    <div className="donate-component-choice-container">
      <h1>Summary of your donation</h1>
      <h3>Items declared to donate:</h3>
      <table className="donate-sum-up-item">
        <tbody>
          <tr>
            <th className="donate-sump-up-th">
              <img
                className="sum-up-icon"
                src={bag}
                alt=""
              />
            </th>
            <td>
              {`${values.bags} bags of:`}
            </td>
            {values.possessions[0].value && <td> clothing suitable for use |</td>}
            {values.possessions[1].value && <td> clothing to recycle |</td>}
            {values.possessions[2].value && <td> toys |</td>}
            {values.possessions[3].value && <td> books |</td>}
            {values.possessions[4].value && <td> not listed items |</td>}
          </tr>
        </tbody>
      </table>
      <table className="donate-sum-up-location">
        <tbody>
          <tr>
            <th className="donate-sump-up-th">
              <img
                className="sum-up-icon"
                src={transport}
                alt=""
              />
            </th>
            <td>location:</td>
            <td>{values.location}</td>
          </tr>
        </tbody>
      </table>
      <div className="donate-sum-up-details">
        <table className="donate-sum-up-details-address">
          <tbody>
            <tr>
              <th className="donate-details-title">Pick-up address:</th>
            </tr>
            <tr>
              <th className="donate-details-th">street:</th>
              <td className="donate-details-td">{values.street}</td>
            </tr>
            <tr>
              <th className="donate-details-th">city:</th>
              <td className="donate-details-td">{values.location}</td>
            </tr>
            <tr>
              <th className="donate-details-th">post-code:</th>
              <td className="donate-details-td">{values.postcode}</td>
            </tr>
            <tr>
              <th className="donate-details-th">phone number:</th>
              <td className="donate-details-td">{values.phone}</td>
            </tr>
          </tbody>
        </table>
        <table className="donate-sum-up-details-time">
          <tbody>
            <tr>
              <th className="donate-details-title">Pick-up time:</th>
            </tr>
            <tr>
              <th className="donate-details-th">date:</th>
              <td className="donate-details-td">{values.date}</td>
            </tr>
            <tr>
              <th className="donate-details-th">time:</th>
              <td className="donate-details-td">{values.hour}</td>
            </tr>
            <tr>
              <th className="donate-details-th">remarks for the courier:</th>
              <td className="donate-details-td">{values.remarks}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

FormikSumUp.propTypes = {
  values: PropTypes.objectOf(PropTypes.string.isRequired),
};

FormikSumUp.defaultProps = {
  values: {},
};

export default FormikSumUp;
