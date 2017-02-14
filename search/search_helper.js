const models = require('../db/models/index');

      return models.Users.create({
        username: req.body.username,
        password: hash,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        timezone: req.body.timezone
      }).then(() => {
        res.redirect('/');
      });
    }


}
