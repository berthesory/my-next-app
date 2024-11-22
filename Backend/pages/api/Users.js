import oracledb from 'oracledb';

// Fonction pour établir la connexion avec la base de données Oracle
async function getOracleConnection() {
  try {
    const connection = await oracledb.getConnection({
      user: 'YOUR_USERNAME',           // Remplacez par votre nom d'utilisateur
      password: 'YOUR_PASSWORD',       // Remplacez par votre mot de passe
      connectString: 'YOUR_CONNECTION_STRING',  // Exemple: 'your_host:1521/your_service_name'
      walletFile: 'path_to_your_wallet.zip', // Si vous utilisez un wallet
    });
    return connection;
  } catch (error) {
    console.error('Erreur de connexion Oracle:', error);
    throw error;
  }
}

// Fonction de gestion des requêtes API
export default async function handler(req, res) {
  let connection;

  if (req.method === 'GET') {
    try {
      // Se connecter à Oracle
      connection = await getOracleConnection();

      // Exécuter une requête SELECT
      const result = await connection.execute('SELECT * FROM users');
      
      // Renvoie les résultats de la requête à l'utilisateur
      res.status(200).json(result.rows);
    } catch (error) {
      console.error('Erreur lors de l\'exécution de la requête GET:', error);
      res.status(500).json({ message: 'Erreur serveur' });
    } finally {
      if (connection) {
        try {
          await connection.close();  // Toujours fermer la connexion
        } catch (error) {
          console.error('Erreur lors de la fermeture de la connexion Oracle:', error);
        }
      }
    }
  } else if (req.method === 'POST') {
    const { name, email } = req.body;

    try {
      // Se connecter à Oracle
      connection = await getOracleConnection();

      // Exécuter une requête INSERT pour ajouter un utilisateur
      const result = await connection.execute(
        'INSERT INTO users (name, email) VALUES (:name, :email)',
        [name, email],
        { autoCommit: true }  // Assurez-vous que les modifications sont validées dans la base
      );
      
      res.status(201).json({ message: 'Utilisateur ajouté', user: { name, email } });
    } catch (error) {
      console.error('Erreur lors de l\'exécution de la requête POST:', error);
      res.status(500).json({ message: 'Erreur serveur' });
    } finally {
      if (connection) {
        try {
          await connection.close();  // Toujours fermer la connexion
        } catch (error) {
          console.error('Erreur lors de la fermeture de la connexion Oracle:', error);
        }
      }
    }
  } else {
    res.status(405).json({ message: 'Méthode non autorisée' });
  }
}
