const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const db = require('./config/connection');
const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

mongoose.connect('mongodb+srv://brochbaltzer:poop101@cluster0.e3iodbb.mongodb.net/social-media-DB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const User = require('./models/User');
const Thought = require('./models/Thought');
const Reaction = require('./models/Reaction');

const cwd = process.cwd();
const activity = cwd.includes('01-Activities')
  ? cwd.split('01-Activities')[1]
  : cwd;

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server for ${activity} running on port ${PORT}!`);
  });
});
