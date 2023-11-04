const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.use((req, res) => res.send('Wrong route!'));

const userRoutes = require('./userRoutes');
app.use('/api/users', userRoutes);


module.exports = router;