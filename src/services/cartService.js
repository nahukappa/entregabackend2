const cartDAO = require('../daos/cartDAO');
const productDAO = require('../daos/productDAO');

class CartService {
  async purchaseCart(cartId, purchaserEmail) {
    const cart = await cartDAO.findById(cartId);
    if (!cart) throw new Error('Carrito no encontrado');

    const purchasedProducts = [];
    const unprocessedProducts = [];
    let total = 0;

    for (const item of cart.products) {
      const product = await productDAO.findById(item.productId);

      if (product && product.stock >= item.quantity) {
        product.stock -= item.quantity;
        await productDAO.update(product.id, { stock: product.stock });

        purchasedProducts.push(item);
        total += product.price * item.quantity;
      } else {
        unprocessedProducts.push(item.productId);
      }
    }

    cart.products = unprocessedProducts.map((id) => ({ productId: id }));
    await cartDAO.update(cart.id, { products: cart.products });

    return { purchasedProducts, unprocessedProducts, total };
  }
}

module.exports = new CartService();
