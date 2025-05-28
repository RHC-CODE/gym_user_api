const User = require('../models/User');
//crear un nuevo usuario

exports.createUser = async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
//obtener todos los usuarios
exports.getAllUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};
// obtener un usuario por ID
exports.getUserById = async (req, res) => {
  const user = await User.findById(req.params.id);
  user ? res.json(user) : res.status(404).json({ error: 'No encontrado' });
};
// actualizar un usuario por ID
exports.updateUser = async (req, res) => {
  const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
  user ? res.json(user) : res.status(404).json({ error: 'No encontrado' });
};
// Eliminar usuario
exports.deleteUser = async (req, res) => {
  const result = await User.findByIdAndDelete(req.params.id);
  result ? res.json({ mensaje: 'Usuario eliminado' }) : res.status(404).json({ error: 'No encontrado' });
};
// Asignar/cambiar plan
exports.assignPlan = async (req, res) => {
  const user = await User.findById(req.params.id);
  if (user) {
    user.plan_id = req.params.planId;
    user.fecha_plan_contratado = new Date();
    user.fecha_caducidad_plan = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000);
    await user.save();
    res.json(user);
  } else {
    res.status(404).json({ error: 'Usuario no encontrado' });
  }
};
// Obtener plan del usuario
exports.getUserPlan = async (req, res) => {
  const user = await User.findById(req.params.id);
  user ? res.json({ plan_id: user.plan_id }) : res.status(404).json({ error: 'Usuario no encontrado' });
};
// Obtener actividades asistidas (simulado)
exports.getUserActivities = async (req, res) => {
  res.json({ actividades: ['Yoga', 'Spinning'] });
};
