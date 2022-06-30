import { TodoItem } from './TodoItem';

export const TodoList = ({ todos = [], message = 'No todos', completed = false }) => {
  return (
    <ul className="list-items">
      {todos.length === 0 ? (
        <div className="alert alert-info">{message}</div>
      ) : (
        todos.map((todo) => <TodoItem key={todo.id} {...todo} completed={completed} />)
      )}
    </ul>
  );
};
