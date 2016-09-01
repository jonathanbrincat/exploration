import React from "react";

import Todo from "./Todo";


export default class Featured extends React.Component {

	constructor() {
		super();

		this.state = {
			todos: [
				{
					id: 113464613,
					text: "Go Shopping",
					complete: false
				},
				{
					id: 235684679,
					text: "Pay Bills",
					complete: false
				}
			]
		};
	}

	//fired when rendered to dom for first time and can only happenonce
	componentWillMount() {
		TodoStore.on("change", () => {
			this.setState({
				todos: TodoStore.getAll();
			});
		});
	}

	render() {
		const { todos } = this.state;

		const TodoComponents = todos.map( (todo) => {
			return <Todo key={ todo.id } {...todo} />
		});

		return (

			//JSX
			<div>
				<h1>Todos</h1>
				<ul>{ TodoComponents }</ul>
			</div>
		);
	}
}