import React from 'react';
import TodoContainer from '../../containers/TodoContainer/TodoContainer';
import './TodoList.css';
const TodoList = ({ todos, name, visibilityFilter }) => {
  return (
    <div className="TodoList">
      <h2>{name}</h2>
      {todos.map((todoId)=><TodoContainer id={todoId} key={todoId} />)}
      <p>{visibilityFilter.toString()}</p>
    </div>
  );
};

export default TodoList;