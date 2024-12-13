const User = require('../models/userModel');

class UserDAO {
  async create(userData) {
    return await User.create(userData);
  }

  async findByEmail(email) {
    return await User.findOne({ email });
  }

  async findById(userId) {
    return await User.findById(userId);
  }
}

module.exports = new UserDAO();
