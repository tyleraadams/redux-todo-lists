import { schema } from 'normalizr';
const todo  =  new schema.Entity('todos');
const listSchema    = new schema.Entity('lists', {
  todos: [todo]
});

const listsSchema = [listSchema];


export { listSchema, listsSchema, todo };