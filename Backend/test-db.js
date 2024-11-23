const oracledb = require('oracledb');
require('dotenv').config();

process.env.TNS_ADMIN = process.env.TNS_ADMIN; // Assurez-vous que TNS_ADMIN est bien défini

async function testConnection() {
  try {
    console.log('Tentative de connexion avec :');
    console.log('Utilisateur :', process.env.DB_USER);
    console.log('Mot de passe :', process.env.DB_PASSWORD ? '*******' : 'Non défini');
    console.log('Chaîne de connexion :', process.env.DB_CONNECTION_STRING);
    console.log('Chemin TNS_ADMIN :', process.env.TNS_ADMIN);

    const connection = await oracledb.getConnection({
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      connectString: process.env.DB_CONNECTION_STRING,
    });

    console.log('Connexion réussie à la base de données');
    const result = await connection.execute('SELECT 1 FROM DUAL');
    console.log('Résultat de la requête :', result.rows);
    await connection.close();
    console.log('Connexion fermée.');
  } catch (err) {
    console.error('Erreur de connexion :', err.message);
    console.error('Détails complets de l\'erreur :', err);
  }
}

testConnection();
