const { Thought } = require('../models/Thought');

const thoughtData = [
    {
        thoughtText: 'Thought 1',
        createdAt: new Date(),
        username: 'user1',
        reactions: [],
    },
    {
        thoughtText: 'Thought 2',
        createdAt: new Date(),
        username: 'user2',
        reactions: [],
    },
    {
        thoughtText: 'Thought 3',
        createdAt: new Date(),
        username: 'user1',
        reactions: [],
    },
];

const seedThoughts = () => Thought.insertMany(thoughtData);

module.exports = seedThoughts;
