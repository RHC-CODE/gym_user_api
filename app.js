const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
require('dotenv').config();

const app = express();

// ✅ Habilitar CORS correctamente
app.use(cors());

// ✅ Middleware para JSON
app.use(express.json());

// ✅ Rutas
app.use('/users', userRoutes);

// ✅ Conexión a MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Conectado a MongoDB'))
  .catch(err => console.error('Error de conexión a MongoDB:', err));

// ✅ Exportar app para Vercel
module.exports = app;
