import { EventEmitter } from "events";

import Dispatcher from "./Dispatcher";


class TodoStore extends EventEmitter {
	constructor() {
		super()
		this.todos = [
			{
				id: 113464613,
				text: "Go Shopping",
				complete: false
			},
			{
				id: 235684679,
				text: "Pay Water Bill",
				complete: false
			},
		];
	}

	createTodo(text) {
		const id = Date.now();

		this.todos.push({
			id,
			text,
			complete: false,
		});

		this.emit("change");
	}

	getAll() {
		return this.todos;
	}

	/* Action Handler (Flux)
	**/
	actionHandler(action) {
		console.log("TodoStore captured an event/action ", action);

		switch(action.type) {
			case "CREATE_TODO": {
				this.createTodo(action.text);
				break;
			}
			case "RECEIVE_TODOS": {
				this.todos = action.todos;
				this.emit("change");
				break;
			}
		}
	}

}

const todoStore = new TodoStore;

Dispatcher.register( todoStore.actionHandler.bind(todoStore) );

export default todoStore;

window.todoStore = todoStore; //DEVONLY: expose todo to window object
window.Dispatcher = Dispatcher;