const formikSubmit = (values) => {
  fetch(`/.netlify/functions/donations`, {
    method: 'POST',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(values)
  })
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
}
export default formikSubmit;