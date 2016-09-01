import React from "react";


export default class Archives extends React.Component {

	constructor() {
		super();
	}

	render() {
		const { params } = this.props; //this.props.params.article
		const { query } = this.props.location;
		const { date, filter, _k } = query;

		return (

			//JSX
			<div>
				<h1>Archives ({ params.articles })</h1>
				<h4>date: {date}, filter: {filter}, _k: {_k}</h4>
			</div>
		);
	}
}