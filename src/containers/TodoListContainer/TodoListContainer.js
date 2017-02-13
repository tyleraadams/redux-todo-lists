import TodoList from '../../components/TodoList/TodoList';
import {connect} from 'react-redux';

const mapStateToProps = (state, ownProps) => {
  const {list} = ownProps;
  const {visibilityFilter} = list;

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
// visibilityFilter: visibilityFilter
  return {
    todos: getVisibleTodos(list.todos) || [],
    name: list.name,
    id: list.id

  }
};

const TodoListContainer = connect(mapStateToProps)(TodoList);

export default TodoListContainer;