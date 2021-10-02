const { Model, DataTypes } = require('sequelize');
// const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class Prompts extends Model {

}

Prompts.init(
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

module.exports = Prompts;