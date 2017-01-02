import { todoLists, todos } from './todos';
import bootstrap from './bootstrap';

const result = (state, action) => {
  switch(action.type) {
    case 'ADD_TODOLIST':
      return [...state, action.payload.id]
    default:
      return state;
  }
}

const entities = (state, action) => {
  let next;
  switch(action.type) {
    case 'ADD_TODOLIST':
      next = Object.assign({}, state);
      next.lists = todoLists(state.lists, action);
      return next;
    case 'ADD_TODO':
      next = Object.assign({}, state);
      next.lists = todoLists(state.lists, action);
      next.todos = todos(state.todos, action);
      return next;
    case 'TOGGLE_TODO':
      next = Object.assign({}, state);
      next.todos = todos(state.todos, action);
      return next;
    case 'SET_FILTER':
      next = Object.assign({}, state);
      next.lists = todoLists(state.lists, action);
      return next;
    default:
      return state;
  }
}

const todoApp = (state = bootstrap, action) => {
  return {
    entities: entities(state.entities,action),
    result: result(state.result,action)
  };
};

export default todoApp