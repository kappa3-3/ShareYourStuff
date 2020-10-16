import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  // step 1 - type of items to donate //
  items_checked: Yup.array()
    .of(
      Yup.string()
        .oneOf([
          "clothing",
          "used_clothing",
          "toys",
          "books",
          "other"
        ], 'Must choose at least one'),
    ).min(1, 'Must choose at least one'),
    
  // step 2 - bags//
  bags: Yup
    .string()
    .min(1, 'Must choose how many bags')
    .required('Must choose how many bags'),
  // step 3 - location //
  location: Yup
    .string()
    .required('Must choose location'),
  // step 4 - pick up details //
  street: Yup
    .string()
    .min(3, 'Street name is too short')
    .max(55, 'Street name is too long')
    .required('Must enter a street name'),
  postcode: Yup
    .string()
    .min(3, 'Postcode is too short')
    .max(8, 'Postcode is too long')
    .required('Must enter a postcode'),
  phone: Yup
    .string()
    .min(9, 'only 9 figures allowed')
    .required('Must enter a phone number'),
  date: Yup
    .string()
    .required('Must enter a date for pick up'),
  time: Yup
    .string()
    .required('Must enter time for pick up'),
});

export default validationSchema;
