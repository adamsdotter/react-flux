import React from "react";

import Todo from "../components/Todo";
import * as TodoActions from "../actions/TodoActions";
import TodoStore from "../stores/TodoStore";

export default class Todos extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: TodoStore.getAll(),
      newTodo: '',
      warningText: ''
    };
  }

  componentWillMount() {
    TodoStore.on('change', () => {
      this.setState({
        todos: TodoStore.getAll()
      });
    });
  }

  validateInput() {
    let OK = true;
    let text = null;
    const css = {color: 'red', fontStyle: 'italic'};

    if (!this.state.newTodo.length) {
      text = <p style={css}>You need to enter a todo!</p>;
      OK = false;
    }

    this.setState({ warningText: text });
    return OK;
  }

  createTodo() {
    if (this.validateInput() === true) {
      TodoActions.createTodo(this.state.newTodo);
      this.state.newTodo = '';
    }
  }

  writeText(e) {
    const val = e.target.value;

    this.setState({
      newTodo: val,
      warningText: null
    });
  }

  render() {
    const { todos } = this.state;
    const { warningText } = this.state;

    const TodoComponents = todos.map((todo) => {
        return <Todo key={todo.id} {...todo}/>;
    });

    return (
      <div>
        <h1>Todos</h1>
        {warningText}
        <input value={this.state.newTodo} onChange={this.writeText.bind(this)} type="text" />
        <button onClick={this.createTodo.bind(this)}>Create!</button>
        <ul>{TodoComponents}</ul>
      </div>
    );
  }
}
