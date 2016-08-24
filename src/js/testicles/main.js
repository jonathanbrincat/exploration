require("./module1.js");
require("./module2.js");

import React from "react";
import ReactDOM from "react-dom";

class Layout extends React.Component {

    render() {
        return (
            //JSX
            <h1>React says Hi!</h1>
        );
    }
}

const app = document.getElementById("app");

ReactDOM.render(<Layout />, app);
