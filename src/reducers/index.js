// import { todoLists, todos } from './todos';
import bootstrap from './bootstrap';
import { normalize } from 'normalizr';
import { listsSchema } from './schemas';
import { combineReducers } from 'redux';
// const result = (state, action) => {
//   switch(action.type) {
//     case 'ADD_TODOLIST':
//       return [...state, action.payload.id]
//     default:
//       return state;
//   }
// }

// const entities = (state, action) => {
//   let next;
//   switch(action.type) {
//     case 'ADD_TODOLIST':
//       next = Object.assign({}, state);
//       next.lists = todoLists(state.lists, action);
//       return next;
//     case 'ADD_TODO':
//       next = Object.assign({}, state);
//       next.lists = todoLists(state.lists, action);
//       next.todos = todos(state.todos, action);
//       return next;
//     case 'TOGGLE_TODO':
//       next = Object.assign({}, state);
//       next.todos = todos(state.todos, action);
//       return next;
//     case 'SET_FILTER':
//       next = Object.assign({}, state);
//       next.lists = todoLists(state.lists, action);
//       return next;
//     // case 'RECEIVE_LISTS':
//       // next = Object.assign({}, state);
//       // next.lists = action.lists;
//       // console.log(action.lists)

//       // return normalizedLists;
//     default:
//       return state;
//   }
// }

const lists = (state = {}, action) => {
  switch(action.type) {
    case 'RECEIVE_LISTS':
      const normalizedLists = normalize(action.lists, listsSchema);
      return normalizedLists.entities.lists;
    case 'RECEIVE_TODO':
      const list = action.listId;
      const modifiedList = Object.assign({}, state[list]);
      modifiedList.todos.push(action.todo.id);
      return Object.assign({}, state, {[modifiedList.id]: modifiedList});
     case 'RECEIVE_LIST':
      action.list.todos = [];
      return Object.assign({}, state, {[action.list.id]: action.list});
    default:
      return state;
  }
}

const todos = (state = {}, action) => {
  switch(action.type) {
  case 'RECEIVE_LISTS':
  const normalizedLists = normalize(action.lists, listsSchema);
      return normalizedLists.entities.todos
  case 'RECEIVE_TODOUPDATED':
    const updatedTodo = action.todo;
    const updatedId = updatedTodo.id;
    return Object.assign({}, state, {[updatedId]:updatedTodo});
   case 'RECEIVE_TODO':
   const todo = action.todo;
    return Object.assign({}, state, {[todo.id]: todo})
  default:
    return state;
  }
};

const result = (state = [], action) => {
  switch(action.type) {
    case 'RECEIVE_LISTS':
    const normalizedLists = normalize(action.lists, listsSchema);
      return normalizedLists.result
    case 'RECEIVE_LIST':
      return [...state, action.list.id]
    default:
      return state;
  }
}

const todoApp = combineReducers({
  result,
  lists,
  todos
});


export default todoApp