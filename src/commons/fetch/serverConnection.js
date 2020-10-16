const serverConnection = (db, data) => fetch(`/.netlify/functions/${db}`, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(data),
})
  .then(res => res.json())

export default serverConnection;