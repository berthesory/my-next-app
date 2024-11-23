import oracledb from 'oracledb';

async function getOracleConnection() {
  try {
    const connection = await oracledb.getConnection({
      user: process.env.ORACLE_USER,
      password: process.env.ORACLE_PASSWORD,
      connectString: process.env.ORACLE_CONNECTION_STRING,
      walletFile: process.env.ORACLE_WALLET_PATH,
    });
    return connection;
  } catch (error) {
    console.error('Erreur de connexion Oracle:', error);
    throw error;
  }
}

export default async function handler(req, res) {
  let connection;

  if (req.method === 'GET') {
    try {
      connection = await getOracleConnection();
      const result = await connection.execute('SELECT * FROM stock');
      res.status(200).json(result.rows);
    } catch (error) {
      res.status(500).json({ message: 'Erreur serveur' });
    } finally {
      if (connection) await connection.close();
    }
  } else if (req.method === 'POST') {
    const { productId, quantity } = req.body;
    try {
      connection = await getOracleConnection();
      const result = await connection.execute(
        'INSERT INTO stock (product_id, quantity) VALUES (:productId, :quantity)',
        [productId, quantity],
        { autoCommit: true }
      );
      res
        .status(201)
        .json({ message: 'Stock mis à jour', stock: { productId, quantity } });
    } catch (error) {
      res.status(500).json({ message: 'Erreur serveur' });
    } finally {
      if (connection) await connection.close();
    }
  } else if (req.method === 'PUT') {
    const { productId, quantity } = req.body;
    try {
      connection = await getOracleConnection();
      const result = await connection.execute(
        'UPDATE stock SET quantity = :quantity WHERE product_id = :productId',
        [quantity, productId],
        { autoCommit: true }
      );
      res
        .status(200)
        .json({ message: 'Stock mis à jour', stock: { productId, quantity } });
    } catch (error) {
      res.status(500).json({ message: 'Erreur serveur' });
    } finally {
      if (connection) await connection.close();
    }
  } else {
    res.status(405).json({ message: 'Méthode non autorisée' });
  }
}
