import Todo from '../../components/Todo/Todo';
import { connect } from 'react-redux';
import { updateTodo } from '../../actions';
const mapStateToProps = (state, ownProps) => {
  const todo = state.todos[ownProps.id];

  const { text, isComplete, id} = todo;
  return {
    text,
    isComplete,
    id
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const { id } = ownProps;
  return {
    toggleTodo: (isComplete) => dispatch(updateTodo(id, isComplete))
  };
};

const TodoContainer = connect(mapStateToProps,mapDispatchToProps)(Todo);

export default TodoContainer;
