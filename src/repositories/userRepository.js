const User = require('../models/User');

class UserRepository {
  static async createUser(userData) {
    const user = new User(userData);
    return await user.save();
  }

  static async getUserByEmail(email) {
    return await User.findOne({ email });
  }

  static async getAllUsers() {
    return await User.find();
  }

  static async updateUser(id, updatedData) {
    return await User.findByIdAndUpdate(id, updatedData, { new: true });
  }

  static async deleteUser(id) {
    return await User.findByIdAndDelete(id);
  }
}

module.exports = UserRepository;
