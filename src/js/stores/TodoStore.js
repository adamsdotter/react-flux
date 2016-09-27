import { EventEmitter } from "events";

import dispatcher from '../dispatcher';

class TodoStore extends EventEmitter {
  constructor() {
    super();
    this.todos = [
        {
          id: 1234,
          text: 'Walk the dog',
          complete: false
        },
        {
          id: 5678,
          text: 'Pay water bills',
          complete: false
        }
    ];
  }

  getAll() {
    return this.todos;
  }

  createTodo(text) {
    const id = Math.random();

    this.todos.push({
      id,
      text,
      completed: false
    });

    this.emit('change');
  }

  handleActions(action) {
    switch (action.type) {
      case 'CREATE_TODO': {
        this.createTodo(action.text);
      }
    }
  }
}

const todoStore = new TodoStore();

dispatcher.register(todoStore.handleActions.bind(todoStore));

window.dispatcher = dispatcher;

export default todoStore;
