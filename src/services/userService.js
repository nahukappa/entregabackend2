const userDAO = require('../daos/userDAO');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

class UserService {
  async registerUser(userData) {
    return await userDAO.create(userData);
  }

  async loginUser({ email, password }) {
    const user = await userDAO.findByEmail(email);
    if (!user || !(await bcrypt.compare(password, user.password))) {
      throw new Error('Credenciales inválidas');
    }

    const token = jwt.sign(
      { id: user._id, email: user.email, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    return token;
  }
}

module.exports = new UserService();
