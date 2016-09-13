//require('./css/candyfloss.css');
require('../../css/candyfloss.css');

require("./module1.js");
require("./module2.js");


import React from "react";
import ReactDOM from "react-dom";

import Vue from "vue";

import Axios from "axios";

import Layout from "./_components/Layout";

//http://zellwk.com/blog/crud-express-mongodb
//http://cwbuecheler.com/web/tutorials/2013/node-express-mongo/

//https://www.npmjs.com/package/nodemon
//https://www.npmjs.com/package/axios


/*
* Service
***************************/
Axios.get('http://localhost:3000')
	.then(function (response) {
		console.log(response);

		dataReady(response.data);
	})
	.catch(function (error) {
		console.log(error);
	});


/*
* 
***************************/
function dataReady(data) {

	/*
	* React
	***************************/
	const appReact = document.getElementById("app-react");
	ReactDOM.render(<Layout data={ data } />, appReact);

	/*
	* Vue
	***************************/
	//var Vue = require("vue");
	new Vue({
	    el: "#app-vue",

	    data: {
	        'message': "Vue says Hi!",
	        'service': data.title
	    }
	})
}
