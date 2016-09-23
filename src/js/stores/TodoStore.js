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
}

const todoStore = new TodoStore();
window.todoStore = todoStore;
export default todoStore;
