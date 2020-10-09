import React from 'react';
import PropTypes from 'prop-types';
import { Field, FieldArray, ErrorMessage } from 'formik';
import DonateRemember from '../DonateRemember';

const FormikItems = ({ values }) => (
  <div className="donate-component-container">
    <DonateRemember active={1} />
    <div className="donate-component-choice-container">
      <span>Step 1/4</span>
      <h1 className="donate-choice-headline"> Choose products you want to donate:</h1>
      <div className="donate-items-choice">
        <span>
          <ErrorMessage name="possessions" />
        </span>
        <FieldArray
          name="possessions_array"
          render={arrayHelpers => (
            values.possessions.map((item, index) => (
              <div
                className="donate-items-single"
                key={item.label}
              >
                <Field
                  name={item.label}
                  id={item.label}
                  className={item.label}
                  type="checkbox"
                  value={item.value}
                  checked={item.value}
                  onClick={() => arrayHelpers.insert(index, values.possessions[index].value = !item.value)}
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
  values: PropTypes.objectOf(PropTypes.string.isRequired),
};

FormikItems.defaultProps = {
  values: {},
};

export default FormikItems;
