const connection = require('../config/connection');
const { User, Thought, Reaction } = require('../models');

connection.on('error', (err) => {
  console.error('MongoDB Connection Error: ' + err);
});

connection.once('open', async () => {
  console.log('Connected to MongoDB')

});