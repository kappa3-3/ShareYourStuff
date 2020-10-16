import React from 'react';
import PropTypes from 'prop-types';
import { Field, ErrorMessage } from 'formik';
import DonateRemember from '../DonateRemember';
import pickup from '../../commons/formik/pickup';

const FormikPickUp = ({ location }) => (
  <div className="donate-component-container">
    <DonateRemember active={4} />
    <div className="donate-pick-up-choice-container">
      <span>Step 4/4</span>
      <h1>Location and time of the pick-up</h1>
      <div className="donate-pick-up-form">
        <div className="donate-pick-up-form-location">
          {pickup.map(item => (
            <div key={item.id}>
              {item.id !== 'city'
                ? (
                  <>
                    <span className="form-error-message">
                      <ErrorMessage name={item.id} />
                    </span>
                    <div className="form-location">
                      <label htmlFor={item.id}>
                        {item.label}
                      </label>
                      <Field
                        id={item.id}
                        name={item.id}
                        type={item.type}
                        placeholder={item.label}

                      />
                    </div>
                  </>
                ) : (
                  <div className="form-location">
                    <span>City</span>
                    <span>{location}</span>
                  </div>
                )}
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

FormikPickUp.propTypes = {
  location: PropTypes.string.isRequired,
};

export default FormikPickUp;
