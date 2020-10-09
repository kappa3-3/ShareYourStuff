import React from 'react';
import PropTypes from 'prop-types';
import { Field, ErrorMessage } from 'formik';
import DonateRemember from '../DonateRemember';
import locations from '../../commons/formik/locations';

const FormikLocation = ({ values, handleChange }) => (
  <div className="donate-component-container">
    <DonateRemember active={3} />
    <div className="donate-location-choice-container">
      <span>Step 3/4</span>
      <h1>Location</h1>
      <span className="form-error-message">
        <ErrorMessage name="location" />
      </span>
      <div className="donate-component-choice">
        <Field
          as="select"
          className="donate-choice-select"
          value={values.location}
          name="location"
        >
          <option>--choose--</option>
          {locations.map(item => (
            <option
              key={item.value}
              value={item.value}
              onChange={() => handleChange}
            >
              {item.label}
            </option>
          ))}
        </Field>
      </div>
      <h1>Who do you want to help?</h1>
      <span> Type in specific organization</span>
      <textarea
        type="text"
        name="organization"
        value={values.organization}
        placeholder="organization name"
        className="donate-choice-textarea"
        onChange={handleChange}
      />
    </div>
  </div>
);

FormikLocation.propTypes = {
  handleChange: PropTypes.func.isRequired,
  values: PropTypes.objectOf(PropTypes.string.isRequired),
};

FormikLocation.defaultProps = {
  values: {},
};

export default FormikLocation;
