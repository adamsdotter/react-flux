import dispatcher from '../dispatcher';

export function createTodo(text) {
  dispatcher.dispatch({
    type: 'CREATE_TODO',
    text
  });
}

export function deleteTodo(id) {
  dispatcher.dispatch({
    type: 'DELETE_TODO',
    id
  });
}

export function fetchTodos() {
  dispatcher.dispatch({type: 'FETCH_TODOS'});

    fetch('../../data/todos.json')
      .then((res) => res.json())
      .then((data) => {
        dispatcher.dispatch({type: 'RECEIVE_TODOS', data: data});
      })
      .catch(function(error) {
          dispatcher.dispatch({type: 'FETCH_TODOS_ERROR', error: error});
      });
}
