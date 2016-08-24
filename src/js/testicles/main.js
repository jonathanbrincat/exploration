require("./module1.js");
require("./module2.js");

import React from "react";
import ReactDOM from "react-dom";

import Layout from "./_components/Layout";


/*
* React
***************************/
const appReact = document.getElementById("app-react");
ReactDOM.render(<Layout />, appReact);


/*
* Vue
***************************/
var Vue = require("vue");
new Vue({
    el: "#app-vue",

    data: {
        'message': "Vue says Hi!"
    }
})
