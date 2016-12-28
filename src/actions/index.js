export const addTodoList = (name) => {
  return {
    type: 'ADD_TODOLIST',
    name
  };
};

export const addTodo = (text, listId) => {
  return {
    type: 'ADD_TODO',
    text,
    listId
  };
};

export const setFilter = (filter, listId) => {
  return {
    type: 'SET_FILTER',
    filter,
    listId
  };
};

export const toggleTodo = (todoId) => {
  return {
    type: 'TOGGLE_TODO',
    todoId
  };
};