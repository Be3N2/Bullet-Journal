var express = require('express');
var app = express();

var mongodb = require('mongodb');
var MONGODB_URI = process.env.DBURL;

MONGODB_URI="mongodb://be3n2:learnmongoPass1@ds117615.mlab.com:17615/learningmongo";
var COLLECTION = "bulletjournal";
var PORT = 3000;

var collection;
var startup = true;

app.use(express.static('public'));

app.get("/", function (request, response) {
	//if (startup) connect();
	console.log(__dirname);
	response.sendFile(__dirname + "/" + 'index.html');
});

//app.get("/save", fetch);

function saveData(request, response) {

}

function fetch(requst, response) {
	if (startup) connect();

	//going to want user to determine what object id is wanted
	mongodb.MongoClient.connect(MONGODB_URI, function(err, db) {
    if (err) {
      //console.log('Unable to connect to the mongoDB server. Error:', err);
      return;
    }
    
    //console.log('Connection established to learningmongo database');
    
    // do some work here with the database.
    collection = db.collection(process.env.COLLECTION);
    collection.find().forEach(function(doc, err) {
      if (err) throw err;
      console.log(doc); //this is for outputting server contents
    }, function() {
      //callback function
      startup = false;
    });
    
    //database stats if needed
    //var promiseObj = db.stats();
    
    //promiseObj.then(function(val) {
    //  console.log(val);
    //}); 

  });
}

// open port with a callback
var listener = app.listen(PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});

//mongo stuff
function connect() {
  
  mongodb.MongoClient.connect(MONGODB_URI, function(err, db) {
    if (err) {
      //console.log('Unable to connect to the mongoDB server. Error:', err);
      return;
    }
    
    //console.log('Connection established to learningmongo database');
    
    // do some work here with the database.
    collection = db.collection(process.env.COLLECTION);
    collection.find().forEach(function(doc, err) {
      if (err) throw err;
      //console.log(doc); //this is for outputting server contents
    }, function() {
      //callback function
      startup = false;
    });
    
    //database stats if needed
    //var promiseObj = db.stats();
    
    //promiseObj.then(function(val) {
    //  console.log(val);
    //}); 

  });
                              
}