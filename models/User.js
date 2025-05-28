const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  nombre: String,
  apellido: String,
  dni: String,
  telefono: String,
  correo_electronico: String,
  enfermedades_base: Boolean,
  fecha_nacimiento: Date,
  edad: Number,
  profesion: String,
  fecha_inscripcion: Date,
  antiguedad_meses: Number,
  plan_id: String,
  fecha_plan_contratado: Date,
  fecha_caducidad_plan: Date
});

module.exports = mongoose.model('User', userSchema);
