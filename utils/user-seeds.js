const mongoose = require('mongoose');
const { User } = require('../models/User');

const userData = [
    {
        username: 'user1',
        email: 'user1@example.com',
        thoughts: [],
        friends: [],
    },
    {
        username: 'user2',
        email: 'user2@example.com',
        thoughts: [],
        friends: [],
    },
    {
        username: 'user3',
        email: 'user3@example.com',
        thoughts: [],
        friends: [],
    },
];

const seedUsers = () => User.insertMany(userData);

module.exports = seedUsers;
