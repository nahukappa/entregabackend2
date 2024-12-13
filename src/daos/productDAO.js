const Product = require('../models/productModel');

class ProductDAO {
  async create(productData) {
    return await Product.create(productData);
  }

  async findAll() {
    return await Product.find();
  }

  async findById(productId) {
    return await Product.findById(productId);
  }

  async update(productId, updateData) {
    return await Product.findByIdAndUpdate(productId, updateData, { new: true });
  }

  async delete(productId) {
    return await Product.findByIdAndDelete(productId);
  }
}

module.exports = new ProductDAO();
