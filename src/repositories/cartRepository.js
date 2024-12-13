const Cart = require('../models/Cart');

class CartRepository {
  static async createCart(userId) {
    const cart = new Cart({ userId });
    return await cart.save();
  }

  static async getCartByUserId(userId) {
    return await Cart.findOne({ userId });
  }

  static async addProductToCart(cartId, productId, quantity) {
    const cart = await Cart.findById(cartId);
    const productIndex = cart.products.findIndex(p => p.productId === productId);

    if (productIndex > -1) {
      cart.products[productIndex].quantity += quantity;
    } else {
      cart.products.push({ productId, quantity });
    }

    return await cart.save();
  }

  static async removeProductFromCart(cartId, productId) {
    const cart = await Cart.findById(cartId);
    cart.products = cart.products.filter(p => p.productId !== productId);
    return await cart.save();
  }

  static async clearCart(cartId) {
    const cart = await Cart.findById(cartId);
    cart.products = [];
    return await cart.save();
  }
}

module.exports = CartRepository;
