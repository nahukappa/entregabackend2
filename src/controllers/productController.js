const productService = require('../services/productService');

const createProduct = async (req, res) => {
  try {
    const product = await productService.createProduct(req.body);
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ message: 'Error al crear el producto', error });
  }
};

const getAllProducts = async (req, res) => {
  try {
    const products = await productService.getAllProducts();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener productos', error });
  }
};

const updateProduct = async (req, res) => {
  try {
    const product = await productService.updateProduct(req.params.id, req.body);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar el producto', error });
  }
};

const deleteProduct = async (req, res) => {
  try {
    await productService.deleteProduct(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar el producto', error });
  }
};

module.exports = {
  createProduct,
  getAllProducts,
  updateProduct,
  deleteProduct,
};
