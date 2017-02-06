export const list = (state = {}, action) => {
  switch(action.type) {
    case 'RECEIVE_LIST':
      console.log('>>> ', action)
      return action.result.entities.lists[Object.keys(action.result.entities.lists)[0]];
    default:
      return state;
  }
};

export const lists = (state = {}, action) => {
  switch(action.type) {
    case 'RECEIVE_LISTS':
      const { result } = action;
      return result.entities.lists;
    case 'RECEIVE_TODO':
      const listId = action.listId;
      const modifiedList = Object.assign({}, state[listId]);
      modifiedList.todos.push(action.todo.id);
      return Object.assign({}, state, {[modifiedList.id]: modifiedList});
     case 'RECEIVE_LIST':
     console.log( '>>> ', action.result.entities.lists)
      return Object.assign({}, state, {[Object.keys(action.result.entities.lists)[0]]: list(state.lists, action)});
    default:
      return state;
  }
}
