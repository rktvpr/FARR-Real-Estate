const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const EstateModel = new Schema({

  Address: {
    type: String,
    allowNull: false,
  },

  Price: {
    type: Number,
    autoIncrement: true,
  },

});

const EstateLocation = model('EstateLocation', EstateModel);

module.exports = EstateLocation;
