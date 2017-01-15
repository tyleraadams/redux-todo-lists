import React from 'react';

const Todo = ({text, isComplete, toggleTodo}) => {
  return (
    <div className="Todo">
      <p style={isComplete ? {textDecoration: 'line-through'} : null } onClick={()=>toggleTodo(isComplete)}>{text}</p>
    </div>
  );
};

export default Todo;