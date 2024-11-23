const oracledb = require('oracledb');
require('dotenv').config();

// Middleware pour se connecter à la base
async function connectDB() {
  return await oracledb.getConnection({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    connectString: process.env.DB_CONNECTION_STRING,
  });
}

// Récupérer les données analytiques
const getAnalyticsData = async (req, res) => {
  try {
    const connection = await connectDB();
    const result = await connection.execute(`SELECT * FROM ANALYTICS`);
    await connection.close();
    res.json({ analytics: result.rows });
  } catch (err) {
    res
      .status(500)
      .json({
        error: 'Erreur lors de la récupération des données analytiques',
        details: err.message,
      });
  }
};

// Exports
module.exports = {
  getAnalyticsData,
};
