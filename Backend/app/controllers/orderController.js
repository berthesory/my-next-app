const oracledb = require("oracledb");
require("dotenv").config();

// Middleware pour se connecter à la base
async function connectDB() {
  return await oracledb.getConnection({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    connectString: process.env.DB_CONNECTION_STRING,
  });
}

// Ajouter une commande
const addOrder = async (req, res) => {
  const { customerId, productId, quantity, orderDate, status } = req.body;
  try {
    const connection = await connectDB();
    const result = await connection.execute(
      `INSERT INTO ORDERS (CUSTOMER_ID, PRODUCT_ID, QUANTITY, ORDER_DATE, STATUS) 
       VALUES (:customerId, :productId, :quantity, :orderDate, :status)`,
      { customerId, productId, quantity, orderDate, status },
      { autoCommit: true }
    );
    await connection.close();
    res.status(201).json({ message: "Commande ajoutée avec succès", result });
  } catch (err) {
    res.status(500).json({ error: "Erreur lors de l'ajout de la commande", details: err.message });
  }
};

// Récupérer toutes les commandes
const getAllOrders = async (req, res) => {
  try {
    const connection = await connectDB();
    const result = await connection.execute(`SELECT * FROM ORDERS`);
    await connection.close();
    res.json({ orders: result.rows });
  } catch (err) {
    res.status(500).json({ error: "Erreur lors de la récupération des commandes", details: err.message });
  }
};

// Exports
module.exports = {
  addOrder,
  getAllOrders,
};
