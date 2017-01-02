const buildTodoList = (action) => {
  const { name, id } = action.payload;
  const newList = {
    id,
    name,
    todos: [],
    visibilityFilter: 1
  };
  return {[id]: newList};
};

const buildTodo = (action) => {
  const { text, id } = action.payload;
  const newTodo = {
    id,
    text,
    isComplete: false
  };
  return {[id]: newTodo};
};

const addTodoToList = (state, action) => {
  const { listId, id } = action.payload;
  const newState = Object.assign({}, state);
  newState[listId].todos = [...state[listId].todos, id];
  return newState;
};

const setFilter = (state, action) => {
  const { listId, filter } = action.payload;
  const newState = Object.assign({}, state);
  newState[listId].visibilityFilter = filter;
  return newState;
}

export const todoLists = (state, action) => {
  switch(action.type) {
    case 'ADD_TODOLIST':
      return Object.assign({}, state, buildTodoList(action));
    case 'ADD_TODO':
      return addTodoToList(state, action);
    case 'SET_FILTER':
      return setFilter(state, action);
    default:
      return state;
  }
};

export const todos = (state, action) => {
  switch(action.type) {
    case 'ADD_TODO':
      return Object.assign({}, state, buildTodo(action));
    case 'TOGGLE_TODO':
      const id = action.payload.todoId;
      const newState =  Object.assign({}, state);
      newState[id].isComplete = !state[id].isComplete;
      return newState;
    default:
     return state;
  }
}
