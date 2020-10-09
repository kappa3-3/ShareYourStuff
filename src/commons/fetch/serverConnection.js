const serverConnection = (db, email, password) => fetch(`/.netlify/functions/${db}`, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ email, password }),
})
  .then(res => res.json())

export default serverConnection;