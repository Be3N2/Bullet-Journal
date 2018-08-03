
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
				
				result.appData = request.body;
				console.log(request.body);
				
				//=============================
				//calculate number of times and event is used

				let days = request.body.days;
				let events = request.body.events;
				
				for (let i = 0; i < events.length; i++) {
					events[i].count = 0;
				}

				for (let i = 0; i < days.length; i++) {
					let eventsId = days[i].event_id;
					for (let j = 0; j < events.length; j++) {
						if (events[j].id == eventsId) 
							events[j].count += 1;
					}
				}

				//===========================

				result.save(function(err) {
					if (err) throw err;

					response.json(result.appData);
				});

				
			});
	}
}

module.exports = yearHandler;