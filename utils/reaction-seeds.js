const { Reaction } = require('../models/Reaction');

const reactionData = [
    {
        reactionBody: 'Like 1',
        createdAt: new Date(),
        username: 'user1',
    },
    {
        reactionBody: 'Like 2',
        createdAt: new Date(),
        username: 'user2',
    },
    {
        reactionBody: 'Like 3',
        createdAt: new Date(),
        username: 'user1',
    },
];

const seedReactions = () => Reaction.insertMany(reactionData);

module.exports = seedReactions;
