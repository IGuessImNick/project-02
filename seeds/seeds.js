const sequelize = require('../config/connection');
const { User } = require('../models');
const { Choices } = require('../models');
const { Prompts } = require('../models');

const userData = require('./userData.json');
const userChoices = require('./choices.json');
const userPrompts = require('./prompts.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  await Choices.bulkCreate(userChoices, {
    individualHooks: true,
    returning: true,
  });

  await Prompts.bulkCreate(userPrompts, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();