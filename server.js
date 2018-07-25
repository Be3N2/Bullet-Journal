var express = require('express');
var app = express();

var mongoose = require('mongoose');

var COLLECTION = "bulletjournal";
var PORT = 3000;

app.use(express.static('public'));

app.get("/", function (request, response) {
	response.sendFile(__dirname + "/" + 'index.html');
});

app.get("/save", saveData());

function saveData(request, response) {
	mongoose.connect('mongodb://be3n2:learnmongoPass1@ds117615.mlab.com:17615/learningmongo');
	var db = mongoose.connection;
	db.on('error', console.error.bind(console, 'connection error:'));
	db.once('open', function() {
	  // we're connected!
	  console.log("All data:");
	  db.collectionName.find().pretty()
	});
}