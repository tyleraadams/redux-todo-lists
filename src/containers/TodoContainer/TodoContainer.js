import Todo from '../../components/Todo/Todo';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => {
  const todo = state.entities.todos[ownProps.id];
  const { text, isComplete } = todo;
  return {
    text,
    isComplete
  };
};

const TodoContainer = connect(mapStateToProps)(Todo);

export default TodoContainer;
