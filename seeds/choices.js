const { Choices } = require('../models');

const userChoices = [
    {
    id: "01",
    text: "choice 01"
    }
]

const seedChoices = () => Choices.bulkCreate(userChoices);

module.exports = seedChoices;