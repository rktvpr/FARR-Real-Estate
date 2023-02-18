const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const RealtorsModel = new Schema({

});

const Realtors = model('User', RealtorsModel);

module.exports = Realtors;
