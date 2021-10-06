const { User } = require('../models');

const userData = [{
        userName: 'user1',
        email: 'email1@email.com',
        password: 'password1'

    },
    {
        userName: 'user2',
        email: 'email2@email.com',
        password: 'password2'
    },
    {
        userName: 'user3',
        email: 'email3@email.com',
        password: 'password3'
    },
    {
        userName: 'user4',
        email: 'email4@email.com',
        password: 'password4'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;