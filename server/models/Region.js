const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const RegionModel = new Schema({
 
});

const Region = model('User', RegionModel);

module.exports = Region;
