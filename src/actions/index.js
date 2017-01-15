import fetch from 'isomorphic-fetch'
import axios from 'axios'

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
  return {
    type: 'RECEIVE_LISTS',
    lists: json.result
  }
}

function requestTodoUpdate(id) {
  return {
    type:'REQUEST_TODOUPDATE',
    id
  }
}

function requestListCreation(name) {
  return {
    type:'REQUEST_LISTCREATION',
    name
  }
}

function receiveList(list) {
  return {
    type: 'RECEIVE_LIST',
    list
  }
}

function requestTodoCreation(text, listId) {
  return {
    type:'REQUEST_TODOUPDATE',
    text,
    listId
  }
}

function receiveTodoUpdated(todo) {
  return {
    type: 'RECEIVE_TODOUPDATED',
    todo
  }
}
function receiveTodo(todo, listId) {
  return {
    type: 'RECEIVE_TODO',
    todo,
    listId
  }
}

export function fetchLists() {
  return function (dispatch) {
    dispatch(requestLists());
    return fetch(`http://localhost:3000/lists`).then(response => response.json()).then(json => dispatch(receiveLists(json)))
  }
}

export function updateTodo(id, isComplete) {
  return function (dispatch) {
    dispatch(requestTodoUpdate(id));
    return axios.put(`http://localhost:3000/todos/${id}`, {isComplete: !isComplete}).then(json => dispatch(receiveTodoUpdated(json.data.result)))
  }
}

export function createTodo(text, listId) {
  return function(dispatch) {
    dispatch(requestTodoCreation(text, listId));
    return axios.post(`http://localhost:3000/lists/${listId}/todos`, { text }).then(json=> dispatch(receiveTodo(json.data.result.todo, json.data.result.list.id)))
  }
}

export function createList(name) {
  return function(dispatch) {
    dispatch(requestListCreation(name));
    return axios.post(`http://localhost:3000/lists`, { name }).then(json=> dispatch(receiveList(json.data.result)))
  }
}