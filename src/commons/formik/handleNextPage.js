const handleNextPage = (errors, touched, active) => {
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

export default handleNextPage;
