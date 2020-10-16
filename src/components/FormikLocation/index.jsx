import React from 'react';
import PropTypes from 'prop-types';
import { Field, ErrorMessage } from 'formik';
import DonateRemember from '../DonateRemember';
import locations from '../../commons/formik/locations';

const FormikLocation = ({ location, organization }) => (
  <div className="donate-component-container">
    <DonateRemember active={3} />
    <div className="donate-location-choice-container">
      <span>Step 3/4</span>
      <h1>Location</h1>
      <ErrorMessage name="location">
        {msg => <span className="form-error-message">{msg}</span>}
      </ErrorMessage>
      <div className="donate-component-choice">
        <Field
          as="select"
          className="donate-choice-select"
          value={location}
          name="location"
        >
          <option value={null}>
            --choose--
          </option>
          {locations.map(item => (
            <option
              key={item.value}
              value={item.value}
            >
              {item.label}
            </option>
          ))}
        </Field>
      </div>
      <h1>Who do you want to help?</h1>
      <span> Type in specific organization</span>
      <Field
        type="text"
        name="organization"
        value={organization}
        placeholder="organization name"
        className="donate-choice-textarea"
      />
    </div>
  </div>
);

FormikLocation.propTypes = {
  location: PropTypes.string.isRequired,
  organization: PropTypes.string.isRequired,
};

export default FormikLocation;
