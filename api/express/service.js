const express = require("express");
const service = express();


/* CORs
********************************/

/*service.all('/', function(request, response, next) {
	response.header("Access-Control-Allow-Origin", "*");
	response.header("Access-Control-Allow-Headers", "X-Requested-With");
	next();
});*/

service.use(function(request, response, next) {
	response.header("Access-Control-Allow-Origin", "*");
	response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});



/*
********************************/

// CREATE
service.post("/", function (request, response) {
	console.log('Hellooooooooooooooooo! ', request);
	response.send('Got a POST request');
});

// READ
//service.get("/", (request, response) => {
service.get("/", function(request, response) {
	//DEVNOTE: this could be argmented with SQL calls to DB to construct and return json

	var json = {
		title: "Hello World",
		value: 0,
		colour: "red",
		size: [32, 34, 38, 40]
	};

	response.send(json);
});

// UPDATE
service.put("/", function (request, response) {
	response.send('Got a PUT request at /user');
});

//DELETE
service.delete("/", function (request, response) {
	response.send('Got a DELETE request at /user');
});


/*
********************************/
service.listen(3000, function() {
	console.log("Express is listening on port 3000");
});


/* Database connection
********************************/
const Mongo = require('mongodb').MongoClient

Mongo.connect('link-to-mongodb', (error, database) => {
	// ... start the server
});

