const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
require('dotenv').config();

const app = express();

// ✅ Habilitar CORS
app.use(cors());

// Middleware para JSON
app.use(express.json());

// Conexión a MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("Conectado a MongoDB"))
  .catch((err) => console.error("Error de conexión:", err));

// Rutas
app.use('/users', userRoutes);

// ✅ No uses app.listen si estás en Vercel
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => console.log(`Servidor en puerto ${PORT}`));

// ✅ Exportar app para Vercel
module.exports = app;
