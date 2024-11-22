// models/Order.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
	
const Order = sequelize.define('Order', {
  productId: { type: DataTypes.INTEGER, allowNull: false },
  userId: { type: DataTypes.INTEGER, allowNull: false },
  quantity: { type: DataTypes.INTEGER, allowNull: false },
  status: { type: DataTypes.STRING, defaultValue: 'Pending' },
});

module.exports = Order;
