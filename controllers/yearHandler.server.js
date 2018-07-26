
var Users = require('../models/userModel');

function yearHandler() {

	this.getAppData = function (req, res) {
		Users
			.findOne({'github.id': req.user.github.id}, { '_id': false })
			.exec(function (err, result) {
				if (err) { throw err; }

				res.json(result.appData);
			});
	}

	//some sort of saveData
	//reference http://www.clementinejs.com/tutorials/tutorial-passport.html#AuthorizationConfiguration
	
}

module.exports = yearHandler;