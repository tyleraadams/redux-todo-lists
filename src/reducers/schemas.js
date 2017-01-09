import { schema } from 'normalizr';
const todo  =  new schema.Entity('todos');
const list    = new schema.Entity('lists', {
  todos: [todo]
});

const listsSchema = [list];


export { listsSchema, todo };