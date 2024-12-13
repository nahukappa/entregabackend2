const cartService = require('../services/cartService');
const ticketService = require('../services/ticketService');

const purchaseCart = async (req, res) => {
  try {
    const { cid } = req.params;
    const { purchasedProducts, unprocessedProducts, total } = await cartService.purchaseCart(cid, req.user.email);

    if (purchasedProducts.length > 0) {
      const ticket = await ticketService.createTicket({
        amount: total,
        purchaser: req.user.email,
      });

      res.status(200).json({
        message: 'Compra realizada con éxito',
        ticket,
        unprocessedProducts,
      });
    } else {
      res.status(400).json({ message: 'No se pudo procesar la compra', unprocessedProducts });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error al procesar la compra', error });
  }
};

module.exports = {
  purchaseCart,
};
