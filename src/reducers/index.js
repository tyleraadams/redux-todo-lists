const bootstrap = {
	result: [1, 2, 3],
	entities: {
		lists: {
			1: {
				id: 1,
				name: 'Groceries',
				todos: [1,2,3,4],
        visibilityFilter: 1
			},
			2: {
				id: 2,
				name: 'For Work',
				todos: [5,6],
        visibilityFilter: 3
			},
			3: {
				id: 3,
				name: 'Apartment Cleaning',
				todos: [7,8,9],
        visibilityFilter: 2
			}
		},
		todos: {
			1: {
				id: 1,
				text: 'Avocados',
				isComplete: true
			},
			2: {
				id: 2,
				text: 'Litter',
				isComplete: false
			},
			3: {
				id: 3,
				text: 'Baking Soda',
				isComplete: false
			},
			4: {
				id: 4,
				text: 'Cheese',
				isComplete: false
			},
			5: {
				id: 5,
				text: 'Finish Goldman Sachs project',
				isComplete: false
			},
			6: {
				id: 6,
				text: 'Make newsletter queues',
				isComplete: false
			},
			7: {
				id: 7,
				text: 'Take out the trash',
				isComplete: false
			},
			8: {
				id: 8,
				text: 'Clean Marcel\'s litter',
				isComplete: false
			},
			9: {
				id: 9,
				text: 'Dust',
				isComplete: false
			}
		},
    visibilityFilters: {
      1: {
        id: 1,
        name: 'SHOW_ALL'
      },
      2: {
        id: 2,
        name: 'SHOW_COMPLETE'
      },
      3: {
        id: 3,
        name: 'SHOW_INCOMPLETE'
      }
    }
	}
};


function todoApp(state = bootstrap, action) {
  let newId, listId, todos, newState;
  switch(action.type) {
    case 'ADD_TODOLIST':
      const { name } = action;
      const todoLists = Object.assign({}, state.entities.lists);
      const todoListIds = Object.keys(todoLists);
      newId = todoListIds.length  + 1;
      todoLists[newId] = {
        id: newId,
        name,
        todos: [],
        visibilityFilter: 1
      };
      state.entities.lists = todoLists;
      return {result: [...state.result, newId], entities: {lists: todoLists, todos: state.entities.todos, visibilityFilters: state.entities.visibilityFilters}};
    case 'ADD_TODO':
      const {text} = action;
      listId = action.listId;
      const selectedList = state.entities.lists[listId];
      todos = Object.assign({}, state.entities.todos);
      newId = Object.keys(todos).length  + 1;
      todos[newId] = {
        id: newId,
        text,
        isComplete: false
      };
      const todosOfSelectedList = selectedList.todos;
      const updatedTodoList = [...todosOfSelectedList, newId];
      const updatedListObj = {
        id: selectedList.id,
        name: selectedList.name,
        todos: updatedTodoList,
        visibilityFilter: selectedList.visibilityFilter
      };
      const updatedListOfLists = Object.assign({}, state.entities.lists);
      updatedListOfLists[selectedList.id] = updatedListObj;
      return {result: state.result, entities: {lists: updatedListOfLists, todos: todos, visibilityFilters: state.entities.visibilityFilters} };
    case 'SET_FILTER':
      let {filter} = action;
      listId = action.listId;
      const filterLookup = Object.keys(state.entities.visibilityFilters).filter(filterId => {  return state.entities.visibilityFilters[filterId].name === filter })[0];
      const updatedList = Object.assign({}, state.entities.lists[listId]);
      updatedList.visibilityFilter = filterLookup;
      newState = Object.assign({}, state);
      newState.entities.lists[listId] = updatedList;
      return newState;
    case 'TOGGLE_TODO':
      const {todoId} = action;
      todos = state.entities.todos;
      const selectedTodo = todos[todoId];
      const updatedTodo = Object.assign({}, selectedTodo, { isComplete: !selectedTodo.isComplete });
      newState = Object.assign({}, state);
      newState.entities.todos[todoId] = updatedTodo;
      return newState;
    default:
  	 return state;


  }
}


export default todoApp