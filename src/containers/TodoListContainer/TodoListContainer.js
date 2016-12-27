import TodoList from '../../components/TodoList/TodoList';
import {connect} from 'react-redux';

const mapStateToProps = (state, ownProps) => {
  const list = state.entities.lists[ownProps.id];
  const visibilityFilter = state.entities.visibilityFilters[list.visibilityFilter].name;
  return {
    todos: list.todos,
    name: list.name,
    visibilityFilter: visibilityFilter
  }
};

const TodoListContainer = connect(mapStateToProps)(TodoList);

export default TodoListContainer;