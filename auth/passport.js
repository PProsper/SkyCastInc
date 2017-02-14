const passport = require('passport');
const models = require('../db/models/index');

module.exports = () => {
  passport.serializeUser((users, done) => {
    done(null, users.id);
  });

  passport.deserializeUser((id, done) => {
    models.Users.findById(id)
    .then((users) => { done(null, users); })
    .catch((err) => { done(err, null); });
  });
};
