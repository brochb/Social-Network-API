const connection = require('../config/connection');
const { seedUsers } = require('./user-seeds');
const { seedThoughts } = require('./thought-seeds');
const { seedReactions } = require('./reaction-seeds');
const seedUsers = require('./user-seeds');
const seedThoughts = require('./thought-seeds');
const seedReactions = require('./reaction-seeds');

connection.on('error', (err) => {
  console.error('MongoDB Connection Error: ' + err);
});

connection.once('open', async () => {
  console.log('Connected to MongoDB');

  try {
    await seedUsers();
    await seedThoughts();
    await seedReactions();

    console.info('Seeding complete! 🌱');
  } catch (err) {
    console.error('Error seeding data:', err);
  } finally {
    process.exit(0);
  }
});
