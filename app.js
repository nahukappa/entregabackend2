const express = require('express');
const cartRoutes = require('./routes/cartRoutes');
const productRoutes = require('./routes/productRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();

// Middlewares globales
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rutas
app.use('/api/carts', cartRoutes);
app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);

module.exports = app;
