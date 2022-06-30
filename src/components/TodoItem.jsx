import { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';
import 'boxicons';

export const TodoItem = ({ id, done, todo, completed = false }) => {
  const { onToggleTodo, onDeleteTodo } = useContext(TodoContext);

  return (
    <li className="list-item">
      <div className="todo-item" onClick={() => onToggleTodo(id)}>
        <input
          type="checkbox"
          checked={done}
          onChange={() => onToggleTodo(id)}
          className="form-check-input"
        />
        <span className={done ? 'text-decoration-line-through' : ''}>
          {todo}
        </span>
      </div>

      {completed && (
        <button className="btn" onClick={() => onDeleteTodo(id)}>
          <box-icon name="trash-alt" color="gray"></box-icon>
        </button>
      )}
    </li>
  );
};
