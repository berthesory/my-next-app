const oracledb = require('oracledb');
require('dotenv').config();

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

// Fonction pour récupérer tous les utilisateurs
const getAllUsers = async (req, res) => {
  try {
    const connection = await connectDB();
    const result = await connection.execute(`SELECT * FROM USERS`);
    await connection.close();
    res.json({ users: result.rows });
  } catch (err) {
    res
      .status(500)
      .json({
        error: 'Erreur lors de la récupération des utilisateurs',
        details: err.message,
      });
  }
};

// Fonction pour ajouter un utilisateur
const addUser = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const connection = await connectDB();
    const result = await connection.execute(
      `INSERT INTO USERS (USERNAME, EMAIL, PASSWORD) VALUES (:username, :email, :password)`,
      { username, email, password },
      { autoCommit: true }
    );
    await connection.close();
    res.status(201).json({ message: 'Utilisateur ajouté avec succès', result });
  } catch (err) {
    res
      .status(500)
      .json({
        error: "Erreur lors de l'ajout de l'utilisateur",
        details: err.message,
      });
  }
};

// Exports
module.exports = {
  getAllUsers,
  addUser,
};
