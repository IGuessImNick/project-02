const router = require('express').Router();
const userRoutes = require('./userRoutes')

// const apiRoutes = require('./api');

router.use('/users', userRoutes);


module.exports = router;
