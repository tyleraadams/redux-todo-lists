import TodoList from '../../components/TodoList/TodoList';
import {connect} from 'react-redux';

const mapStateToProps = (state, ownProps) => {
  const list = state.entities.lists[ownProps.id];
  const visibilityFilter = state.entities.visibilityFilters[list.visibilityFilter];
  const todos = state.entities.todos;
  const getVisibleTodos = (todos) => {
    switch(visibilityFilter.name) {
      case 'SHOW_COMPLETE':
        return todos.filter(todoId => state.entities.todos[todoId].isComplete);
      case 'SHOW_INCOMPLETE':
        return todos.filter(todoId => !state.entities.todos[todoId].isComplete);
      default:
        return todos;
    }
  };

  return {
    todos: getVisibleTodos(list.todos),
    name: list.name,
    visibilityFilter: visibilityFilter
  }
};

const TodoListContainer = connect(mapStateToProps)(TodoList);

export default TodoListContainer;