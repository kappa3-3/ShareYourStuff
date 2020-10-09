const formikSubmit = (values, { setSubmitting }) => {

  // setSubmitting(true);
  fetch('http://localhost:3005/donations', {
    method: 'POST',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(values)
  })
    .then((data) => console.log(data))
    .catch((err) => console.log(err));

  // setSubmitting(false);
  // this.setState({ isFormSubmitted: true });
  // this.setState({ active: this.state.active + 1 })
}
export default formikSubmit;