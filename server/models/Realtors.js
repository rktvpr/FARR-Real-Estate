const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const RealtorsModel = new Schema({

      name: {
        type: String,
        required: true,
        unique: true,
        trim: true,
      },
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, 'Must match an email address!'],
      },

});

const Realtors = model('User', RealtorsModel);

module.exports = Realtors;
