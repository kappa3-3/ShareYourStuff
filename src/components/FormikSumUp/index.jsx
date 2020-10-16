import React from 'react';
import PropTypes from 'prop-types';
import SumUpDetail from '../SumUpDetail';
import bag from '../../assets/icons/Icon-2.svg';
import transport from '../../assets/icons/Icon-4.svg';
import SumUpIcon from '../SumUpIcon';

const FormikSumUp = ({ values }) => (
  <div className="donate-component-container">
    <div className="donate-component-choice-container">
      <h1>Summary of your donation</h1>
      <table className="donate-sum-up-main">
        <tbody>
          <tr>
            <th colSpan="3" className="donate-details-title">
              Items declared to donate:
            </th>
          </tr>
          <tr>
            <SumUpIcon src={bag} />
            <td>
              {`${values.bags} bags of: `}
            </td>
            {values.possessions.map(({ description, value }) => value
              && (
                <td key={description}>
                  {`${description} | `}
                </td>
              ))}
          </tr>
          <tr>
            <SumUpIcon src={transport} />
            <td>location:&nbsp;</td>
            <td>
              {values.location}
              {values.organization.length > 1
                && ` , ${values.organization}`}
            </td>
          </tr>
        </tbody>
      </table>
      <div className="donate-sum-up-details">
        <table className="donate-sum-up-details-address">
          <tbody>
            <tr>
              <th className="donate-details-title">Pick-up address:</th>
            </tr>
            <SumUpDetail item={{ label: 'street', value: values.street }} />
            <SumUpDetail item={{ label: 'city', value: values.location }} />
            <SumUpDetail item={{ label: 'postcode', value: values.postcode }} />
            <SumUpDetail item={{ label: 'phone', value: values.phone }} />
          </tbody>
        </table>
        <table className="donate-sum-up-details-time">
          <tbody>
            <tr>
              <th className="donate-details-title">Pick-up time:</th>
            </tr>
            <SumUpDetail item={{ label: 'date', value: values.date }} />
            <SumUpDetail item={{ label: 'time', value: values.time }} />
            <SumUpDetail item={{ label: 'remarks', value: values.remarks }} />
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

FormikSumUp.propTypes = {
  values: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.bool,
      PropTypes.array,
    ]),
  ),
};

FormikSumUp.defaultProps = {
  values: {},
};

export default FormikSumUp;
