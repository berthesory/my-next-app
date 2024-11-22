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

// Récupérer tous les produits
router.get("/", async (req, res) => {
  try {
    const connection = await connectDB();
    const result = await connection.execute(`SELECT * FROM PRODUCTS`);
    await connection.close();
    res.json({ products: result.rows });
  } catch (err) {
    res.status(500).json({ error: "Erreur lors de la récupération des produits", details: err.message });
  }
});

// Ajouter un produit
router.post("/add", async (req, res) => {
  const { name, price, description, stock } = req.body;
  try {
    const connection = await connectDB();
    const result = await connection.execute(
      `INSERT INTO PRODUCTS (NAME, PRICE, DESCRIPTION, STOCK) 
       VALUES (:name, :price, :description, :stock)`,
      { name, price, description, stock },
      { autoCommit: true }
    );
    await connection.close();
    res.status(201).json({ message: "Produit ajouté avec succès", result });
  } catch (err) {
    res.status(500).json({ error: "Erreur lors de l'ajout du produit", details: err.message });
  }
});

module.exports = router;
