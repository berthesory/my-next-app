const oracledb = require('oracledb');
const database = require('../config/database');

async function getAllProducts() {
  const query = `SELECT * FROM PRODUCTS`;
  const result = await database.execute(query);
  return result.rows;
}

async function getProductById(id) {
  const query = `SELECT * FROM PRODUCTS WHERE id = :id`;
  const result = await database.execute(query, [id]);
  return result.rows[0];
}

async function createProduct(name, price) {
  const query = `INSERT INTO PRODUCTS (name, price) VALUES (:name, :price)`;
  await database.execute(query, { name, price });
}

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
};
