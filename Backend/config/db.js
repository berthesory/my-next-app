const oracledb = require('oracledb');
require('dotenv').config();

async function connectToDatabase() {
  try {
    console.log('Tentative de connexion avec la chaîne suivante :', process.env.DB_CONNECTION_STRING);
    const connection = await oracledb.getConnection({
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      connectString: process.env.DB_CONNECTION_STRING,
    });
    console.log('Connexion réussie à la base de données Oracle');
    return connection;
  } catch (err) {
    console.error('Erreur de connexion à la base de données :', err.message);
    console.error('Détails complets :', err);
    process.exit(1); // Arrête l'application en cas d'échec
  }
}

module.exports = connectToDatabase;
