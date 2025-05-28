const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('../routes/userRoutes');
require('dotenv').config();

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI);

app.use('/users', userRoutes);

// ⬇️ Esta línea es clave para Vercel
module.exports = app;
