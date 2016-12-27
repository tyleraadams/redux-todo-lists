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