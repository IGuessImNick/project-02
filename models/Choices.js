const { Model, DataTypes } = require('sequelize');
// const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class Choices extends Model {}

Choices.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
        },

        text: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    }
);

module.exports = Choices;