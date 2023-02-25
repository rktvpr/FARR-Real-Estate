const db = require('../config/connection');
const { User, Region } = require('../models');
const userSeeds = require('./userSeeds.json');
const RegionData = require('./RegionData.json');

db.once('open', async () => {
  try {
    await User.deleteMany({});
    await Region.deleteMany({});
    await User.create(userSeeds);
    await Region.create(RegionData);

//     for (let i = 0; i < thoughtSeeds.length; i++) {
//       const { _id, thoughtAuthor } = await Thought.create(thoughtSeeds[i]);
//       const user = await User.findOneAndUpdate(
//         { username: thoughtAuthor },
//         {
//           $addToSet: {
//             thoughts: _id,
//           },
//         }
//       );
//     }

  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});
