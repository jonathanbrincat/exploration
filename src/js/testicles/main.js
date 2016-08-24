require("./module1.js");
require("./module2.js");

import React from "react";
import ReactDOM from "react-dom";

class Layout extends React.Component {

    constructor() {
        super();

        this.bar = "foobar";
    }

    foo() {
        return "foobar";
    }

    render() {
        const name = "Jon";

        return (
            //JSX
            <div>
                <h1>React says Hi!</h1>
                <h4>JSX can only return one parent DOM element; ie. root node</h4>
                <p>Here is some inline javascript; whats 1 + 2? {1 + 2}</p>
                <p>Heres another way; Hi my name is { name }</p>
                <p>Heres another way; Hello { this.foo() }</p>
                <p>Heres a better way; Hello { this.bar }</p>
            </div>
        );
    }
}

const appReact = document.getElementById("app-react");

ReactDOM.render(<Layout />, appReact);

var Vue = require("vue");

new Vue({
    el: "#app-vue",

    data: {
        'message': "Vue says Hi!"
    }
})
