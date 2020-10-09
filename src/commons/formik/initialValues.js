const initialValues = {
  //step 1//
  possessions: [
    { label: 'clothing', description: 'clothing suitable for use', value: false },
    { label: 'used_clothing', description: 'clothing to recycle', value: false },
    { label: 'toys', description: 'toys', value: false },
    { label: 'books', description: 'books', value: false },
    { label: 'other', description: 'other', value: false }
  ],
  //step 2//
  bags: '',
  //step 3
  location: '',
  organization: '',
  //step 4//
  street: '',
  city: '',
  postcode: '',
  phone: '',
  date: '',
  hour: '',
  remarks: ''
}

export default initialValues;