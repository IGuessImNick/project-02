const router = require('express').Router();
const { User, Choices, Prompts } = require('../../models');

// find user by username
router.get('/', (req, res) => {
  User.findAll({
          attributes: { exclude: ['[password'] }
      })
      .then(dbUserData => res.json(dbUserData))
      .catch(err => {
          console.log(err);
          res.status(500).json(err);
      });
});

// create user route
router.post('/', (req, res) => {

  User.create({
      userName: req.body.username,
      password: req.body.password
  })

  .then(dbUserData => {
          req.session.save(() => {
              // req.session.user_id = dbUserData.id;
              req.session.username = dbUserData.userName;
              req.session.loggedIn = true;

              res.json(dbUserData);
          });
      })
      .catch(err => {
          console.log(err);
          res.status(500).json(err);
      });
});

// login routes
router.post('/login', (req, res) => {
  User.findOne({
          where: 
          {
              userName: req.body.username
          }
      }).then(dbUserData => {
          if (!dbUserData) {
              // json message does not appear
              res.status(400).json({ message: 'No user with that username!' });
              return;
          }
          const validPassword = dbUserData.checkPassword(req.body.password);

          if (!validPassword) {
              res.status(400).json({ message: 'Incorrect password!' });
              return;
          }
          req.session.save(() => {

              req.session.user_id = dbUserData.id;
              req.session.username = dbUserData.username;
              req.session.loggedIn = true;

              res.json({ user: dbUserData, message: 'You are now logged in!' });
          });
      })
      .catch(err => {
          console.log(err);
          res.status(500).json(err);
      });
});


//logout
router.get('/logout', (req, res) => {
  if (req.session.loggedIn) {
    // Remove the session variables
    req.session.destroy(() => {
      res.status(200).redirect('/');
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
