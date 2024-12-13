const userService = require('../services/userService');

const registerUser = async (req, res) => {
  try {
    const user = await userService.registerUser(req.body);
    res.status(201).json({ message: 'Usuario registrado con éxito', user });
  } catch (error) {
    res.status(400).json({ message: 'Error al registrar usuario', error });
  }
};

const loginUser = async (req, res) => {
  try {
    const token = await userService.loginUser(req.body);
    res.status(200).json({ message: 'Inicio de sesión exitoso', token });
  } catch (error) {
    res.status(401).json({ message: 'Credenciales inválidas', error });
  }
};

module.exports = {
  registerUser,
  loginUser,
};
