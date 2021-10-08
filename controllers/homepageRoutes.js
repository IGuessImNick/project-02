const router = require('express').Router();
const { User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/homepage', withAuth, async (req, res) => {
    try {
        await res.render('homepage');
    } catch (err) {
        res.status(500).json(err);
      }
});