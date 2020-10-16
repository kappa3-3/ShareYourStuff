import React from 'react';
import PropTypes from 'prop-types';
import { Field, ErrorMessage } from 'formik';
import DonateRemember from '../DonateRemember';
import options from '../../commons/formik/options';

const FormikBags = ({ values }) => (
  <div className="donate-component-container">
    <DonateRemember active={2} />
    <div className="donate-bags-choice-container">
      <span>Step 2/4</span>
      <h1>How many bags do you want to donate?</h1>
      <span className="form-error-message">
        <ErrorMessage name="bags" />
      </span>
      <div className="donate-component-choice">
        <label htmlFor="bags">Amount of the 60l bags:</label>
        <Field
          as="select"
          id="bags"
          value={values}
          name="bags"
        >
          <option value={null}>
            --choose--
          </option>
          {options.map(item => (
            <option
              key={item.value}
              value={item.value}
              className="select"
            >
              {item.label}
            </option>
          ))}
        </Field>
      </div>
    </div>
  </div>
);

FormikBags.propTypes = {
  values: PropTypes.string.isRequired,
};

export default FormikBags;
