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
      const result = await connection.execute('SELECT * FROM deliveries');
      res.status(200).json(result.rows);
    } catch (error) {
      res.status(500).json({ message: 'Erreur serveur' });
    } finally {
      if (connection) await connection.close();
    }
  } else if (req.method === 'POST') {
    const { deliveryDate, orderId, address } = req.body;
    try {
      connection = await getOracleConnection();
      const result = await connection.execute(
        'INSERT INTO deliveries (delivery_date, order_id, address) VALUES (:deliveryDate, :orderId, :address)',
        [deliveryDate, orderId, address],
        { autoCommit: true }
      );
      res
        .status(201)
        .json({
          message: 'Livraison ajoutée',
          delivery: { deliveryDate, orderId, address },
        });
    } catch (error) {
      res.status(500).json({ message: 'Erreur serveur' });
    } finally {
      if (connection) await connection.close();
    }
  } else {
    res.status(405).json({ message: 'Méthode non autorisée' });
  }
}
