const Cart = require('../models/cartModel');

class CartDAO {
  async create(cartData) {
    return await Cart.create(cartData);
  }

  async findById(cartId) {
    return await Cart.findById(cartId).populate('products.productId');
  }

  async update(cartId, updateData) {
    return await Cart.findByIdAndUpdate(cartId, updateData, { new: true });
  }

  async delete(cartId) {
    return await Cart.findByIdAndDelete(cartId);
  }
}

module.exports = new CartDAO();
