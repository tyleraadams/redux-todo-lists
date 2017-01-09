import fetch from 'isomorphic-fetch'
const generateId = () => {
  return Math.floor(Math.random()*100000000);
};

export const addTodoList = (name) => {
  return {
    type: 'ADD_TODOLIST',
    payload: {
      name,
      id: generateId()
    }
  };
};

export const addTodo = (text, listId) => {
  return {
    type: 'ADD_TODO',
    payload: {
      text,
      listId,
      id: generateId()
    }
  };
};

export const setFilter = (filter, listId) => {
  return {
    type: 'SET_FILTER',
    payload: {
      filter,
      listId
    }
  };
};

export const toggleTodo = (todoId) => {
  return {
    type: 'TOGGLE_TODO',
    payload: {
      todoId
    }
  };
};

function requestLists() {
  return {
    type: 'REQUEST_LISTS'
  }
}

function receiveLists(json) {
  console.log('!!! ', json);
  return {
    type: 'RECEIVE_LISTS',
    lists: json.result
  }
}

export function fetchLists() {
  return function (dispatch) {
    dispatch(requestLists());
    return fetch(`http://localhost:3000/lists`).then(response => response.json()).then(json => dispatch(receiveLists(json)))
  }
}