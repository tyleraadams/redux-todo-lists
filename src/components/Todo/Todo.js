import React from 'react';
const Todo = ({text, isComplete}) => {
  return (
    <div className="Todo">
      <p data-isComplete={isComplete.toString()}>{text}</p>
    </div>
  );
}


export default Todo;