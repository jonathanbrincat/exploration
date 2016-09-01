import React from "react";
import { Link } from "react-router";


export default class Layout extends React.Component {

	constructor() {
		super();
	}

	clickHandler() {
		console.log(this.props);
		//this.props.history.replaceState(null, "/"); //back button will not work
		this.props.history.pushState(null, "/"); //back button works //this.props.history & pushState deprecated
	}

	render() {
		const { history } = this.props;
		console.log( history.isActive("archives") );

		return (

			//JSX
			<div>
				<h1>Killer News</h1>

				{this.props.children}
				<button class="btn btn-danger" onClick={this.clickHandler.bind(this)}>featured</button>
				<Link class="btn btn-primary" to="archives" activeClassName="test">archives</Link>
				<Link to="settings" activeClassName="test"><button class="btn btn-success">settings</button></Link>
			</div>
		);
	}
}