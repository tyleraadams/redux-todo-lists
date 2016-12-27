import React from 'react';
import { connect } from 'react-redux';
import { addTodoList } from '../../actions';

function addTodoListComp ({ dispatch }) {
  let input;
  return (
    <form onSubmit={ e => { e.preventDefault();
                            // input ? console.log(input.value) : '';
                            dispatch(addTodoList(input.value));
                            input.value = '';
                          } }>
      <input ref={node => { input = node }} />
      <button type="submit">Create</button>
    </form>
  );
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     addTodoList: (name) => dispatch(addTodoList(name))
//   }
// }
const addTodoListContainer = connect()(addTodoListComp);

export default addTodoListContainer;