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
  const handleNextPage = (errors, touched) => {
    switch (active) {
      case 1:
        return errors.items_checked;
      case 2:
        return !touched.bags || !!errors.bags;
      case 3:
        return !touched.location || !!errors.location;
      case 4:
        return Object.keys(errors).length > 0;
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
            formikSubmit(values);
            setSubmitting(false);
            setIsFormSubmitted(true);
            setActive(active + 1);
          }}
          validateOnMount
        >
          {({
            values,
            errors,
            touched,
            handleSubmit,
          }) => (
            <>
              <Form onSubmit={handleSubmit}>
                {active === 1
                  && (
                    <FormikItems
                      checked={values.items_checked}
                      errors={errors.items_checked}
                    />
                  )}
                {active === 2
                  && (
                    <FormikBags
                      values={values.bags}
                    />
                  )}
                {active === 3
                  && (
                    <FormikLocation
                      location={values.location}
                      organization={values.organization}
                    />
                  )}
                {active === 4
                  && (
                    <FormikPickUp
                      location={values.location}
                    />
                  )}
                {active === 5 && <FormikSumUp values={values} />}
                {active === 5
                  && (
                    <div className="donate-button-container">
                      <button
                        type="submit"
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
            </>
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
