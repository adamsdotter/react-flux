import { EventEmitter } from "events";

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
  };

  getAll() {
    return this.todos;
  };
}

const todoStore = new TodoStore();

export default todoStore;
