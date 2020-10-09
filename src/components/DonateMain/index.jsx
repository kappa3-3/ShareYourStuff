import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import DonateHeader from '../DonateHeader';
import Contact from '../Contact';
import Footer from '../Footer';
import DonateEnd from '../DonateEnd';
import FormikItems from '../FormikItems';
import validationSchema from '../../commons/formik/validationSchema';
import formikSubmit from '../../commons/formik/formikSubmit';
import initialValues from '../../commons/formik/initialValues';
import FormikBags from '../FormikBags';
import FormikLocation from '../FormikLocation';
import FormikPickUp from '../FormikPickUp';
import FormikSumUp from '../FormikSumUp';
import './style.scss';

function DonateMain() {
  const [active, setActive] = useState(1);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  // const [errorStatus, setErrorStatus] = useState(false);
  const handleNextPage = (errors, touched) => {
    switch (active) {
      case 1:
        return !touched.possessions_array || !!errors.possessions_array;
      case 2:
        return !touched.bags || !!errors.bags;
      case 3:
        return !touched.location || !!errors.location;
      case 4:
        return !touched.street
          || !touched.postcode
          || !touched.hour
          || !touched.phone
          || !touched.date
          || !!errors.location;
      default:
        return true;
    }
  };

  return (
    <div id="donate-container" className="donate-container">
      <DonateHeader />
      <div id="donate-steps-container" className="donate-steps-container">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting }) => {
            setSubmitting(true);
            formikSubmit();
            setSubmitting(false);
            setIsFormSubmitted(true);
            setActive(active + 1);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <Form onSubmit={handleSubmit}>
              {active === 1
                && (
                  <FormikItems
                    values={values}
                    errors={errors}
                  />
                )}
              {active === 2
                && (
                  <FormikBags
                    values={values}
                    errors={errors}
                    handleChange={() => handleChange}
                  />
                )}
              {active === 3
                && (
                  <FormikLocation
                    values={values}
                    errors={errors}
                    handleChange={() => handleChange}
                  />
                )}
              {active === 4
                && (
                  <FormikPickUp
                    values={values}
                    errors={errors}
                    handleChange={handleChange}
                    handleBlur={() => handleBlur}
                  />
                )}
              {active === 5 && <FormikSumUp values={values} />}
              {active === 5
                && (
                  <div className="donate-button-container">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="button-forward-visible"
                    >
                      Submit
                    </button>
                  </div>
                )}
              {(active === 6 && isFormSubmitted) && <DonateEnd />}
              <div className="donate-button-container">
                <button
                  type="button"
                  className={(active === 1 || active === 6) ? 'button-display-none' : 'button-backward-visible'}
                  onClick={() => setActive(active - 1)}
                >
                  Back
                </button>
                <button
                  type="button"
                  className={active === 5 || active === 6 ? 'button-display-none' : 'button-forward-visible'}
                  disabled={handleNextPage(errors, touched)}
                  onClick={() => setActive(active + 1)}
                >
                  Next
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
      <Contact />
      <div className="footer-wrapper">
        <Footer />
      </div>
    </div>
  );
}

export default DonateMain;
