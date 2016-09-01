import React from "react";

export default class Subheader extends React.Component {

	onTextChange(event) {
		const str = event.target.value;
		
		this.props.changeSubtitle(str);
	}

	render() {
		return (
			//JSX
			<div>
				<header>Header { this.props.subtitle } </header>
				<input type="text" value={ this.props.subtitle } onChange={this.onTextChange.bind(this)} />
			</div>
		);
	}
}