
var GitHubStrategy = require('passport-github').Strategy;
var User = require('../models/userModel');
var configAuth = require('./auth');

module.exports = function (passport) {
	//serializing the user object before streaming across network
	passport.serializeUser(function (user, done) {
		//done proceeds in authentication process
		//aka moving from network data to server auth
		//auths and stores => req.session.passport.user
		
		done(null, user.id);
	});

	passport.deserializeUser(function (id, done) {
		//deserializes data from github or whatever
		//then searches database for id
		//then stores it in the req.user object
		User.findById(id, function (err, user) {
			done(err, user);
		});
	});

	//authentication for our app from github
	passport.use(new GitHubStrategy({
		clientID: configAuth.githubAuth.clientID,
		clientSecret: configAuth.githubAuth.clientSecret,
		callbackURL: configAuth.githubAuth.callbackURL
	}, 
	function(token, refreshToken, profile, done) {
		//verify callback function
		process.nextTick(function() {
		//nextTick function waits for github response async
			User.findOne({'github.id': profile.id }, function (err, user) {
				if (err) {
					return done(err);
				}

				if (user) {
					return done(null, user);
				} else {
					var newUser = new User();

					newUser.github.id = profile.id;
					newUser.github.username = profile.username;
					newUser.github.displayName = profile.displayName;
					newUser.github.publicRepos = profile._json.public_repos;
					
					//basic year setup here!

					newUser.save(function (err) {
						if (err) {
							throw err;
						}

						return done(null, newUser);
					});
				}
			});
		});
	}));
}