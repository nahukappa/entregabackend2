const Product = require('../models/Product');

class ProductRepository {
  static async createProduct(productData) {
    const product = new Product(productData);
    return await product.save();
  }

  static async getProductById(id) {
    return await Product.findById(id);
  }

  static async getAllProducts() {
    return await Product.find();
  }

  static async updateProduct(id, updatedData) {
    return await Product.findByIdAndUpdate(id, updatedData, { new: true });
  }

  static async deleteProduct(id) {
    return await Product.findByIdAndDelete(id);
  }
}

module.exports = ProductRepository;
