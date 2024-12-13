const express = require('express');
const authMiddleware = require('../middlewares/authMiddleware');
const currentMiddleware = require('../middlewares/currentMiddleware'); // Importamos el middleware de autorización

const router = express.Router();

// Ruta para "/current", asegurándonos de que el usuario esté autenticado
router.get('/current', authMiddleware, currentMiddleware);

module.exports = router;
