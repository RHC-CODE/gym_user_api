const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('../routes/userRoutes');
require('dotenv').config();

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Conectado a MongoDB'))
  .catch(err => console.error('Error de conexión:', err));

app.use('/users', userRoutes);

// Esto es lo que Vercel necesita:
module.exports = app;
