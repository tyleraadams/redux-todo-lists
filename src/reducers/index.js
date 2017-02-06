import { combineReducers } from 'redux';
import { lists } from './lists';
import { todos } from './todos';


const todoApp = combineReducers({
  lists,
  todos
});

export default todoApp


export const getLists = state => Object.values(state).map(list => list);

export const getList = (state, id) => state[id];