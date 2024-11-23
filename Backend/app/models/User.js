// app/models/User.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Importation de l'instance Sequelize

// Définir le modèle User
const User = sequelize.define('User', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = User;
