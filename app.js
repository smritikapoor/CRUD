const contactRoutes = require('./contact');
const express = require('express');
const app = express();
const mysql = require('./db');
const freshsales = require('./freshsales');

app.use(express.json());

app.use('/api', require('./routes/contact'));
app.use('/api/contacts', contactRoutes);

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});