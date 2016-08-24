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
                <h2>JSX can only return one parent DOM element; ie. root node</h2>
                <h3>Here is some inline javascript; whats 1 + 2? {1 + 2}</h3>
                <h4>Heres another way; Hi my name is { name }</h4>
                <h5>Heres another way; Hello { this.foo() }</h5>
                <h5>Heres a better way; Hello { this.bar }</h5>
            </div>
        );
    }
}

const appReact = document.getElementById("app-react");

ReactDOM.render(<Layout />, appReact);
