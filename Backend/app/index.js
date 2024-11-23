process.env.TNS_ADMIN = "C:\Users\DELL\Wallet_THNJAU6SNYO3FQGP"; // Remplacez par le chemin exact
const express = require('express');
const cors = require('cors');
require('dotenv').config({ path: './DB_connection.env' });

const usersRoutes = require('./Routes/UserRoutes');
const analyticsRoutes = require('./Routes/AnalyticsRoutes');
const deliveryRoutes = require('./Routes/deliveryRoutes');
const orderRoutes = require('./Routes/OrderRoutes');
const productRoutes = require('./Routes/ProductRoutes');
const stockRoutes = require('./Routes/StockRoutes');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Route de test pour vérifier si le serveur est opérationnel
app.get('/', (req, res) => {
  res.send('Serveur opérationnel');
});

// Routes principales
app.use('/api/users', usersRoutes);
app.use('/api/analytics', analyticsRoutes);
app.use('/api/delivery', deliveryRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/products', productRoutes);
app.use('/api/stocks', stockRoutes);

// Middleware de gestion des erreurs
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Une erreur est survenue !' });
});

// Démarrage du serveur
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});
