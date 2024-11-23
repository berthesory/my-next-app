const express = require('express');
const oracledb = require('oracledb');
require('dotenv').config();

const router = express.Router();

// Configuration Oracle
oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;

// Middleware pour se connecter à la base
async function connectDB() {
  return await oracledb.getConnection({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    connectString: process.env.DB_CONNECTION_STRING,
  });
}

// Route GET : Récupérer toutes les livraisons
router.get('/', async (req, res) => {
  try {
    const connection = await connectDB();

    const result = await connection.execute(`SELECT * FROM DELIVERIES`);
  
    await connection.close();
    res.status(200).json(result.rows); // Retourne les livraisons
  } catch (err) {
    res.status(500).json({
      error: "Erreur lors de la récupération des livraisons",
      details: err.message,
    });
  }
});

// Route POST : Ajouter une nouvelle livraison
router.post('/add', async (req, res) => {
  const { orderId, deliveryDate, status } = req.body;
  try {
    const connection = await connectDB();

    const result = await connection.execute(
      `INSERT INTO DELIVERIES (ORDER_ID, DELIVERY_DATE, STATUS) VALUES (:orderId, :deliveryDate, :status)`,
      { orderId, deliveryDate, status },
      { autoCommit: true }
    );

    await connection.close();
    res.status(201).json({ message: 'Livraison ajoutée avec succès', result });
  } catch (err) {
    res.status(500).json({
      error: "Erreur lors de l'ajout de la livraison",
      details: err.message,
    });
  }
});

module.exports = router;
