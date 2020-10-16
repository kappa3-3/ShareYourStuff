import React from 'react';
import { Field, FieldArray } from 'formik';
import PropTypes from 'prop-types';
import DonateRemember from '../DonateRemember';
import possessions from '../../commons/formik/possessions';

const FormikItems = ({ checked, errors }) => (
  <div className="donate-component-container">
    <DonateRemember active={1} />
    <div className="donate-component-choice-container">
      <span>Step 1/4</span>
      <h1 className="donate-choice-headline">
        Choose products you want to donate:
      </h1>
      <div className="donate-items-choice">
        <span className="form-error-message">
          {!!errors && errors}
        </span>
        <FieldArray
          name="items_checked"
          render={arrayHelpers => (
            possessions.map(item => (
              <div
                className="donate-items-single"
                key={item.label}
              >
                <Field
                  name={item.label}
                  id={item.label}
                  className={item.label}
                  type="checkbox"
                  defaultValue="false"
                  onClick={e => (e.target.value === 'false'
                    ? arrayHelpers.push(item.label)
                    : arrayHelpers.remove(checked.indexOf(e.target.id)))}
                />
                <label
                  htmlFor={item.label}
                  className="donate-items-single-label"
                >
                  {item.description}
                </label>
              </div>
            )))}
        />
      </div>
    </div>
  </div>
);

FormikItems.propTypes = {
  checked: PropTypes.arrayOf(PropTypes.string),
  errors: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
  ]),
};

FormikItems.defaultProps = {
  checked: [],
  errors: '',
};

export default FormikItems;
