const { connect, connection } = require('mongoose');
const dotenv = require('dotenv').config()

// After you create your Heroku application, visit https://dashboard.heroku.com/apps/ select the application name and add your Atlas connection string as a Config Var
// Node will look for this environment variable and if it exists, it will use it. Otherwise, it will assume that you are running this application locally
const connectionString =
  process.env.MONGODB_URI || 'mongodb+srv://brochbaltzer:poop101@social-network-api.vxzbip3.mongodb.net/social-media-DB';

connect(connectionString);

module.exports = connection;