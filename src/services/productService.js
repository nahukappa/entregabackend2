const productDAO = require('../daos/productDAO');

class ProductService {
  async createProduct(productData) {
    return await productDAO.create(productData);
  }

  async getAllProducts() {
    return await productDAO.findAll();
  }

  async updateProduct(productId, updateData) {
    return await productDAO.update(productId, updateData);
  }

  async deleteProduct(productId) {
    return await productDAO.delete(productId);
  }
}

module.exports = new ProductService();
