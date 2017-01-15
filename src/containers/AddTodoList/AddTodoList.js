import React from 'react';
import { connect } from 'react-redux';
import { createList } from '../../actions';

function addTodoListComp ({ dispatch }) {
  let input;
  return (
    <form style={{flexBasis: 100 + '%'}} onSubmit={ e => { e.preventDefault();
                            dispatch(createList(input.value));
                            input.value = '';
                          } }>
      <input ref={node => { input = node }} />
      <button type="submit">Create</button>
    </form>
  );
}

const addTodoListContainer = connect()(addTodoListComp);

export default addTodoListContainer;