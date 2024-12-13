require('dotenv').config();
const app = require('./app');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 3000;
const DB_URI = process.env.DB_URI;

// Conexión a MongoDB
mongoose
  .connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Conectado a la base de datos');
    app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));
  })
  .catch((err) => {
    console.error('Error al conectar a la base de datos:', err);
  });
