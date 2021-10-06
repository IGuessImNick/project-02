// const { User } = require('../models');
// const { Choices } = require('../models');
// const { Prompts } = require('../models');

const seedUsers = require('./userData');
const seedChoices = require('./choices');
const seedPrompts = require('./prompts');

const sequelize = require('../config/connection');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await seedUsers();
  await seedChoices();
  await seedPrompts();
  
  process.exit(0);

};

seedDatabase();