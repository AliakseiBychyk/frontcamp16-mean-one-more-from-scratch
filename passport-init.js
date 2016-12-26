var LocalStrategy = require('passport-local').Strategy;
var bCrypt = require('bcrypt-nodejs');

//temporary data store
var users = {};

// Passport needs to be able to serialize and deserialize users to support persistent login sessions

module.exports = function (passport) {
  
  passport.serializeUser(function (user, done) {
    console.log('serializing user: ', user.username);
    return done(null, user.username);
  });

  passport.deserializeUser(function (username, done) {
    return done('we have not implement this', false);
  });

  passport.use('login', new LocalStrategy({
    passReqToCallback: true
  },
    function (req, username, password, done) {
      return done('we have not implement this', false);
    }
  ));

  passport.use('signup', new LocalStrategy({
    passReqToCallback: true // allows us to pass back the entire request to the callback
  },
    function (req, username, password, done) {
      findOrCreateUser = function () {
        return done('we have not implement this ', false);
      };
      return findOrCreateUser();
    }
  ));

  var isValidPassword = function (user, password) {
    return bCrypt.compareSync(password, user.password);
  };

  // Generates hash using bCrypt
  var createHash = function (password) {
    return bCrypt.hashSync(password, bCrypt.genSaltSync(10), null);
  };
};