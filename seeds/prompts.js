const { Prompts } = require('../models');

const userPrompts = [
    {
    id: "01",
    text: "choice 01"
    }
]

const seedPrompts = () => Prompts.bulkCreate(userPrompts);

module.exports = seedPrompts;