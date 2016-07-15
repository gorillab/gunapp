'use strict';

var passport = require('passport-facebook');

var User = null;

exports.authFacebook = function(req, res, next) {

	passport.use(new FacebookStrategy({
	    clientID: '641390806030478',
	    clientSecret: 'f130303366a39bfa948d645cda063160',
	    callbackURL: "http://localhost:3000/auth/facebook/callback"
	  },
	  function(accessToken, refreshToken, profile, cb) {
	    User.findOrCreate({ facebookId: profile.id }, function (err, user) {
	      return cb(err, user);
	    });
	  }
	));
};