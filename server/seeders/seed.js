const db = require('../config/connection');
const { User, Realtors, EstateLocation } = require('../models');
const userSeeds = require('./userSeeds.json');
const EstateSeeds = require('./EstateSeeds.json');

db.once('open', async () => {
  try {
    await Realtors.deleteMany({});
    await EstateLocation.deleteMany({});
    await User.deleteMany({});

    await User.create(userSeeds);

  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});
