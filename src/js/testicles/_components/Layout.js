import React from "react";

import Header from "./Header";
import Footer from "./Footer";

export default class Layout extends React.Component {

    constructor() {
        super();

        this.bar = "foobar";

        //STATES
        this.state = {
        	title: "Default title"
        };

        //PROPS
    }

    foo() {
        return "foobar";
    }

    render() {
    	setTimeout( () => { 
    		this.setState({
    			title: "Welcome foobar"
    		})
    	}, 2000 );

        const name = "Jon";

        var DOM = [
        	<Header />,
        	<Footer />
        ];

        const title = "hello";
        
        return (

            //JSX
            <div>
            	<Header title={ title } />
            	<Header title= { this.state.title } />

            	{ DOM }

                <h1>React says Hi!</h1>
                <h4>JSX can only return one parent DOM element; ie. root node</h4>
                <p>Here is some inline javascript; whats 1 + 2? {1 + 2}</p>
                <p>Heres another way; Hi my name is { name }</p>
                <p>Heres another way; Hello { this.foo() }</p>
                <p>Heres a better way; Hello { this.bar }</p>

                <p>This is a react state { this.state.title }</p>
                
                <Footer />
            </div>
        );
    }
}