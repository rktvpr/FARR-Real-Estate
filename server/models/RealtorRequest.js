const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const RealtorRequestModel = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
      },
      email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, 'Must match an email address!'],
      },
      phoneNumber: {
        type: Number,
        required: true,
        minlength: 10,
      },
      referencedProperty: {
        type: String,
        required: true,
        unique: true,
        trim: true,
      },
      note: {
        type: String,
        required: false,
        unique: true,
        trim: true,
      },
});

const Realtors = model('RealtorRequest', RealtorRequestModel);

module.exports = Realtors;
