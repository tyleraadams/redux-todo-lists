import React from 'react';
import TodoListContainer from '../../containers/TodoListContainer/TodoListContainer';
import AddTodoListContainer from '../../containers/AddTodoList/AddTodoList';

import './ListIndex.css';

const ListIndex = ({ lists }) => {
  console.log('lists', lists)
  return (
  <div className="ListIndex">
    <AddTodoListContainer />
    {lists.length ? lists.map(list => <TodoListContainer list={list} key={list.id} />) : ''}
  </div>
  );
};

export default ListIndex;