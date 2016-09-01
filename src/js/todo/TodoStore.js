import { EventEmitter } from "events";


class TodoStore extends EventEmitter {
	constructor() {
		super();

		this.todos: [
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
		];
	}

	getAll {
		return this.todos;
	}

	createTodo(text) {
		const id = Date.now();

		this.todo.push({
			id,
			text,
			complete: false
		})
	}
}

const todoStore = new TodoStore;

export default todoStore;