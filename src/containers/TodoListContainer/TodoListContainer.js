import TodoList from '../../components/TodoList/TodoList';
import {connect} from 'react-redux';

const mapStateToProps = (state, ownProps) => {
  const list = ownProps.list;
  console.log(' > ! > ! ', ownProps, list)
  // const visibilityFilter = state.entities.visibilityFilters[list.visibilityFilter];
  // const getVisibleTodos = (todos) => {
  //   switch(visibilityFilter.name) {
  //     case 'SHOW_COMPLETE':
  //       return todos.filter(todoId => state.entities.todos[todoId].isComplete);
  //     case 'SHOW_INCOMPLETE':
  //       return todos.filter(todoId => !state.entities.todos[todoId].isComplete);
  //     default:
  //       return todos;
  //   }
  // };
// visibilityFilter: visibilityFilter
  return {
    todos: list.todos,
    name: list.name,
    id: list.id

  }
};

const TodoListContainer = connect(mapStateToProps)(TodoList);

export default TodoListContainer;