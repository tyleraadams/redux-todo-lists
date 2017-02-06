export const todos = (state = {}, action) => {
  switch(action.type) {
  case 'RECEIVE_LISTS':
    return action.result.entities.todos;
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