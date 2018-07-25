var express = require('express');
var app = express();

var mongoose = require('mongoose');

var User = require('./models/model');

mongoose.connect('mongodb://be3n2:learnmongoPass1@ds117615.mlab.com:17615/learningmongo', { keepAlive: true, keepAliveInitialDelay: 300000 }, function(err) {
	if (err) {
		throw new Error('Database failed to connect!');
	} else {
		console.log('MongoDB successfully connected.');
	}

	var COLLECTION = "bulletjournal";
	var PORT = 3000;

	app.use(express.static('public'));

	app.get("/", function (request, response) {
		response.sendFile(__dirname + "/" + 'index.html');
	});

	app.get("/save", saveData);

	app.get("/find", find);

	function find(request, response) {
		

		User.find(function(err, res) {
			if (err) {
				response.send("Error");
				return;
			}
			response.send(res);
		});
		
	}

	function saveData(request, response) {

		let chris = new User({
		  name: 'Chris',
		  username: 'sevilayha',
		  password: 'password' 
		});

		chris.save(function(err) {
		  if (err && err.code !== 11000) {
		  	console.log(err);
		    console.log(err.code);
		    response.send('Not a Duplicate User Error');
		    return;
		  }  
		  if (err && err.code === 11000) {
		  	//duplicate user error code
		  	response.send("Duplicate User");
		  	return;
		  }

		  console.log('User saved successfully!');
		  response.send("User saved successfully!");
		});

		
	}

	// open port with a callback
	var listener = app.listen(PORT, function () {
	  console.log('Your app is listening on port ' + listener.address().port);
	});


});