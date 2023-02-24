const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const EstateModel = new Schema({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },

  Address: {
    type: String,
    allowNull: false,
  },

  Price: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
  },

});

const EstateLocation = model('User', EstateModel);

module.exports = EstateLocation;
