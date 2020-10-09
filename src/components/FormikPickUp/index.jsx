import React from 'react';
import PropTypes from 'prop-types';
import { Field, ErrorMessage } from 'formik';
import DonateRemember from '../DonateRemember';

const FormikPickUp = ({ values, handleChange, handleBlur }) => (
  <div className="donate-component-container">
    <DonateRemember active={4} />
    <div className="donate-pick-up-choice-container">
      <span>Step 4/4</span>
      <h1>Location and time of the pick-up</h1>
      <div className="donate-pick-up-form">
        <div className="donate-pick-up-form-location">
          <span className="form-error-message">
            <ErrorMessage name="street" />
          </span>
          <div className="form-location">
            <label htmlFor="street">Street</label>
            <Field
              type="text"
              name="street"
              id="street"
              placeholder="street name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.street}
            />
          </div>
          <div className="form-location">
            <span>City</span>
            <span>{values.location}</span>
          </div>
          <span className="form-error-message">
            <ErrorMessage name="postcode" />
          </span>
          <div className="form-location">
            <label htmlFor="postcode">Postcode</label>
            <Field
              type="text"
              name="postcode"
              id="postcode"
              placeholder="postcode"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.postcode}
            />
          </div>
          <span className="form-error-message">
            <ErrorMessage name="phone" />
          </span>
          <div className="form-location">
            <label htmlFor="telephone">Phone number</label>
            <Field
              type="number"
              name="phone"
              id="phone"
              placeholder="phone number"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.phone}
            />
          </div>

        </div>
        <div className="donate-pick-up-form-time">
          <span className="form-error-message"><ErrorMessage name="date" /></span>
          <div className="form-time">
            <label htmlFor="date">Date</label>
            <Field
              type="date"
              name="date"
              id="date"
              placeholder="date"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.date}
            />
          </div>
          <span className="form-error-message"><ErrorMessage name="hour" /></span>
          <div className="form-time">
            <label htmlFor="hour">The hour</label>
            <Field
              type="text"
              name="hour"
              id="hour"
              placeholder="time"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.hour}
            />
          </div>
          <div className="form-time">
            <label htmlFor="remarks">Remarks</label>
            <textarea
              name="remarks"
              id="remarks"
              placeholder="remarks for the courier"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.remarks}
            />
          </div>
        </div>
      </div>
    </div>
  </div>
);

FormikPickUp.propTypes = {
  values: PropTypes.objectOf(PropTypes.string.isRequired),
  handleChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
};

FormikPickUp.defaultProps = {
  values: {},
};

export default FormikPickUp;
