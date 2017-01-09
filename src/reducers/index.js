import { todoLists, todos } from './todos';
import bootstrap from './bootstrap';
import { normalize } from 'normalizr';
import { listsSchema } from './schemas';
import { combineReducers } from 'redux';
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
    // case 'RECEIVE_LISTS':
      // next = Object.assign({}, state);
      // next.lists = action.lists;
      // console.log(action.lists)

      // return normalizedLists;
    default:
      return state;
  }
}

const lists = (state = {  lists:[]}, action) => {
  switch(action.type) {
    case 'RECEIVE_LISTS':
      const normalizedLists = normalize(action.lists, listsSchema);
      return normalizedLists.result.map(id => normalizedLists.entities.lists[id]);
    default:
      return state;
  }
}

const todoApp = combineReducers({
  lists
});


export default todoApp