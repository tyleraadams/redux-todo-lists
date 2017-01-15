import React from 'react';
import TodoContainer from '../../containers/TodoContainer/TodoContainer';
import AddTodo from '../../containers/AddTodo/AddTodo';
import SetVisibilityFilter from '../../containers/SetVisibilityFilter/SetVisibilityFilter';

import './TodoList.css';
const TodoList = ({ todos, name, visibilityFilter, id }) => {
  return (
    <div className="TodoList">
      <h2>{name}</h2>
      {todos.map((todoId)=><TodoContainer id={todoId} key={todoId} />)}
      <AddTodo id={id}/>

    </div>
  );
};

export default TodoList;