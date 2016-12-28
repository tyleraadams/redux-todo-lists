import Todo from '../../components/Todo/Todo';
import { connect } from 'react-redux';
import { toggleTodo } from '../../actions';
const mapStateToProps = (state, ownProps) => {
  const todo = state.entities.todos[ownProps.id];
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
    toggleTodo: () => dispatch(toggleTodo(id))
  };
}
const TodoContainer = connect(mapStateToProps,mapDispatchToProps)(Todo);

export default TodoContainer;
