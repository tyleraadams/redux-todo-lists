import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../../actions';

function addTodoComp ({ dispatch, listId }) {
  let input;
  return (
    <form onSubmit={ e => { e.preventDefault();
                            dispatch(addTodo(input.value, listId));
                            input.value = '';
                          } }>
      <input ref={node => { input = node }} />
      <button type="submit">Create</button>
    </form>
  );
}

const mapStateToProps = (state, ownProps) => {
  const {id} = ownProps
  return {
    listId: id
  };
};

const addTodoListContainer = connect(mapStateToProps)(addTodoComp);

export default addTodoListContainer;