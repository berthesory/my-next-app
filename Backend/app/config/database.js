// config/database.js
const { Sequelize } = require('sequelize');

// Paramètres de connexion à Oracle Autonomous Database
const sequelize = new Sequelize({
  dialect: 'oracle',
  username: 'ADMIN',  // Ton nom d'utilisateur
  password: 'Annee2024@@@',  // Ton mot de passe
  host: 'adb.eu-frankfurt-1.oraclecloud.com',  // Hôte Oracle Autonomous Database
  port: 1522,  // Le port pour TCP SSL
  database: 'g87497cc58e5ce0_thnjau6snyo3fqgp_high',  // Service name de ta base de données Oracle
  dialectOptions: {
    connectString: '(description=(retry_count=20)(retry_delay=3)(address=(protocol=tcps)(port=1522)(host=adb.eu-frankfurt-1.oraclecloud.com))(connect_data=(service_name=g87497cc58e5ce0_thnjau6snyo3fqgp_high.adb.oraclecloud.com))(security=(ssl_server_dn_match=yes)))',
    ssl: true,  // Si Oracle exige une connexion SSL
    wallet: 'C:/Oracle/instantclient-basic/instantclient_23_6/network/admin'  // Le chemin vers ton wallet Oracle
  },
  logging: console.log,  // Pour afficher les logs SQL (optionnel)
});

module.exports = sequelize;

