const express = require("express");
const oracledb = require("oracledb");
require("dotenv").config();

const router = express.Router();
oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;

// Middleware pour se connecter à la base
async function connectDB() {
  return await oracledb.getConnection({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    connectString: process.env.DB_CONNECTION_STRING,
  });
}

// Mettre à jour le stock d'un produit
router.put("/update", async (req, res) => {
  const { productId, newStock } = req.body;
  try {
    const connection = await connectDB();
    const result = await connection.execute(
      `UPDATE PRODUCTS SET STOCK = :newStock WHERE ID = :productId`,
      { productId, newStock },
      { autoCommit: true }
    );
    await connection.close();
    res.json({ message: "Stock mis à jour avec succès", result });
  } catch (err) {
    res.status(500).json({ error: "Erreur lors de la mise à jour du stock", details: err.message });
  }
});

module.exports = router;
