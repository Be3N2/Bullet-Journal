//User and Calendar model with mongoose
//tutorial: http://www.clementinejs.com/tutorials/tutorial-passport.html#Prerequisites

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
	github: {
		id: String,
		displayName: String,
		username: String,
      publicRepos: Number
	},
   appData: {
      year: Array
   }
}, { collection: 'bulletjournal' });

var User = mongoose.model('User', userSchema);

module.exports = User;