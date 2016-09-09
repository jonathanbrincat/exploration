import React from "react";

import Header from "./Header";
import Subheader from "./Subheader";
import Footer from "./Footer";

export default class Layout extends React.Component {

	constructor() {
		super();

		this.bar = "foobar";

		this.state = {
			title: "Default title",
			subtitle: "Default subtitle"
		};
	}

	foo() {
		return "foobar";
	}

	changeSubtitle(subtitle) {
		this.setState({subtitle}); //ES6 - equivalent/shorthand for title = title
	}

	render() {
		const name = "Jon";
		const title = "hello";

		var DOM = [
			<Header />,
			<Footer />
		];

		setTimeout( () => { 
			this.setState({
				title: "Welcome foobar"
			})
		}, 2000 );
		
		return (

			//JSX
			<div>
				<h1>React says Hi!</h1>
				
				<div class="dev__payload">
					<h4>This is data coming from a dummy (webservice/API) endpoint; express server: <span>{ this.props.data.title }</span></h4>
				</div>

				{ DOM }

				<Header title={ "String literal" } />
				<Header title={ title } />
				<Header title={ this.state.title } />

				<Subheader changeSubtitle={this.changeSubtitle.bind(this)} subtitle={ this.state.subtitle }  />

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