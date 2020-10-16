import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import validationSchema from '../../commons/formik/validationSchema';
import initialValues from '../../commons/formik/initialValues';
import serverConnection from '../../commons/fetch/serverConnection';
import switchActivePage from '../../commons/formik/switchActivePage';
import handleNextPage from '../../commons/formik/handleNextPage';
import './style.scss';


function DonateMain() {
  const [active, setActive] = useState(1);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  return (
    <div id="donate-steps-container" className="donate-steps-container">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(true);
          serverConnection('donations', values)
            .then(res => {
              // console.log(res.ok);
              if (res.ok !== 1) return 'Something went wrong';
              setSubmitting(false);
              setIsFormSubmitted(true);
              setActive(active + 1);
            })
            .catch(err => { throw (err); });
        }}
        validateOnMount
      >
        {({
          values,
          errors,
          touched,
          handleSubmit,
        }) => (
            <Form onSubmit={handleSubmit}>
              {switchActivePage(values, errors, active)}
              <div className="donate-button-container">
                <button
                  type="button"
                  className={(active === 1 || active === 6)
                    ? 'button-display-none'
                    : 'button-backward-visible'}
                  onClick={() => setActive(active - 1)}
                >
                  Back
                  </button>
                <button
                  type="button"
                  className={active === 5 || active === 6
                    ? 'button-display-none'
                    : 'button-forward-visible'}
                  disabled={handleNextPage(errors, touched, active)}
                  onClick={() => setActive(active + 1)}
                >
                  Next
                  </button>
              </div>
            </Form>
          )}
      </Formik>
    </div>
  );
}

export default DonateMain;
