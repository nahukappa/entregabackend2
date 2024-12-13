const currentMiddleware = (req, res, next) => {
    // Verifica si el usuario está autenticado (puedes ajustar la lógica según lo que necesites)
    if (!req.user) {
      return res.status(403).json({ message: 'No autorizado' });
    }
    next();  // Si el usuario está autenticado, continúa con la solicitud
  };
  
  module.exports = currentMiddleware;
  