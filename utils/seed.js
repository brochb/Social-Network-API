const connection = require('../config/connection');
const { User, Thought, Reaction } = require('../models');
const getUsers = require('./user-seeds');
const getThoughts = require('./thought-seeds');
const getReactions = require('./reaction-seeds');


console.time('seeding');

connection.on('error', (err) => {
  console.error('MongoDB Connection Error: ' + err);
});

connection.once('open', async () => {
  console.log('Connected to MongoDB')
  let userCheck = await connection.db.listCollections({
    name: 'users'
  }).toArray();
  if (userCheck.length) {
    await connection.dropCollection('users');
  }
  
  let thoughtCheck = await connection.db.listCollections({
    name: 'thoughts'
  }).toArray();
  if (thoughtCheck.length) {
    await connection.dropCollection('thoughts');
  }

  let reactionCheck = await connection.db.listCollections({
    name: 'reactions'
  }).toArray();
  if (reactionCheck.length) {
    await connection.dropCollection('reactions')
  }

});