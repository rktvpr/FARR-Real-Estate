const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const RegionModel = new Schema({
 
});

const Region = model('Region', RegionModel);

module.exports = Region;
