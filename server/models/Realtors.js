const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const RealtorsModel = new Schema({

});

const Realtors = model('Realtor', RealtorsModel);

module.exports = Realtors;
