const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const init = require('./passport');
const models = require('../db/models/index');
const authHelpers = require('../auth/auth-helpers');

const options = {};

init();

passport.use(new LocalStrategy(options, (username, password, done) => {
  // check to see if the username exists
  models.Users.findAll({
    where: {
      username
    }
  })
  .then((users) => {
    if (users[0] === undefined) {
      return done(null, false);
    }
    if (!authHelpers.comparePass(password, users[0].dataValues.password)) {
      return done(null, false);
    } else {
      return done(null, users[0].dataValues);
    }
  })
  .catch((err) => { return done(err); });
}));

module.exports = passport;