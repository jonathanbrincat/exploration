const express = require("express");
const service = express();

const bodyParser = require("body-parser");

var db;

//parse form port request and handle params
service.use(bodyParser.urlencoded({extended: true}));
//TUTE
//javascript templating engine for dynamic rendering of js to html(pages) through express
service.set("view engine", "ejs");
service.set("views", __dirname + "/views");

//TUTE
//make public folder accessible
service.use(express.static(__dirname + "/public"));
service.set("public", __dirname + "/public");

//TUTE
//allow express to consume json
service.use(bodyParser.json());

//REFERENCE:
//https://zellwk.com/blog/crud-express-mongodb/
//https://zellwk.com/blog/crud-express-and-mongodb-2/
//http://www.embeddedjs.com/

//http://code.tutsplus.com/tutorials/introduction-to-webpack-part-1--cms-25791
//http://code.tutsplus.com/tutorials/introduction-to-webpack-part-2--cms-25911

//https://www.smashingmagazine.com/2015/12/introduction-to-postcss/

//import collection to db
//mongoimport -h ds021356.mlab.com:21356 -d testicles -c vehicles -u <user> -p <password> --file <input file> --jsonArray


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
	//console.log('Hellooooooooooooooooo! ', request);
	console.log('Hellooooooooooooooooo! ', request.body);
	//response.send('Got a POST request dude');

	db.collection("quotes").save(request.body, (error, result) => {

		if(error) return console.error("Insane in the membrane: Something went wrong, ", error);

		console.log("saved to the database");
		//TUTE
		response.redirect("/");

		//JB
		//response.redirect("//localhost:4444/");
	});
});

// READ
service.get("/", (request, response) => {
//service.get("/", function(request, response) {
	//DEVNOTE: this could be argmented with SQL calls to DB to construct and return json

	// var json = {
	// 	title: "Hello World",
	// 	value: 0,
	// 	colour: "red",
	// 	size: [32, 34, 38, 40]
	// };

	// response.send(json);

	//var cursor = db.collection("quotes").find().toArray(function(error, query) {
	var cursor = db.collection("vehicles").find().toArray(function(error, query) {

		if(error) return console.error("Insane in the membrane: Something went wrong, ", error);

		console.log(query);

		//TUTE
		//respond with ejs render --> html
		//response.render("index.ejs", {quotes: query});
		response.render("index.ejs", {vehicles: query});

		//JB
		//respond with array/json
		//response.send(query);
	});
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
// service.listen(3000, function() {
// 	console.log("Express is listening on port 3000");
// });


/* Database connection
********************************/
const Mongo = require('mongodb').MongoClient

Mongo.connect('mongodb://jonathanbrincat:M0nkeynuts@ds021356.mlab.com:21356/testicles', (error, database) => {

	if(error) return console.error("Insane in the membrane: Something went wrong, ", error);

	db = database;

	//start service only if db is connected
	service.listen(3000, function() {
		console.log("Express is listening on port 3000");
	});
});

