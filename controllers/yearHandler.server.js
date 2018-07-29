
var Users = require('../models/userModel');

function yearHandler() {

	this.getAppData = function (request, response) {
		Users
			.findOne({'github.id': request.user.github.id}, { '_id': false })
			.exec(function (err, result) {
				if (err) throw err;
				
				response.json(result.appData);
			});
	}

	this.saveAppData = function (request, response) {
		Users
			.findOne({'github.id': request.user.github.id})
			.exec(function (err, result) {
				if (err) throw err; 
				
				console.log(result);
				result.appData.days.push(request.body);
				console.log("=================");
				console.log(request.body);
				result.save(function(err) {
					if (err) throw err;

					response.json(result.appData);
				});

				
			});
	}
}

module.exports = yearHandler;