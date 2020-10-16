import React from 'react';
import FormikItems from '../../components/FormikItems';
import FormikBags from '../../components/FormikBags';
import FormikLocation from '../../components/FormikLocation';
import FormikPickUp from '../../components/FormikPickUp';
import FormikSumUp from '../../components/FormikSumUp';
import DonateEnd from '../../components/DonateEnd';

const switchActivePage = (values, errors, active) => {
  switch (active) {
    case 1:
      return (
        <FormikItems
          checked={values.items_checked}
          errors={errors.items_checked}
        />
      );
    case 2:
      return (
        <FormikBags
          values={values.bags}
        />
      );
    case 3:
      return (
        <FormikLocation
          location={values.location}
          organization={values.organization}
        />
      );
    case 4:
      return (
        <FormikPickUp
          location={values.location}
        />
      );
    case 5:
      return (
        <>
          <FormikSumUp values={values} />
          <div className="donate-button-container">
            <button
              type="submit"
              className="button-forward-visible"
            >
              Submit
              </button>
          </div>
        </>
      )
    case 6:
      return <DonateEnd />;
    default:
      return true;
  }
}

export default switchActivePage;