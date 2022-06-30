import { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';
import { useForm } from '../hooks';

const initialTodo = {
  id: null,
  todo: '',
  done: false,
};

export const AddTodo = () => {
  const { todo, formValues, onInputChange, resetForm } = useForm(initialTodo);
  const { onAddTodo } = useContext(TodoContext);

  const addTodo = (e) => {
    e.preventDefault();
    onAddTodo({
      ...formValues,
      id: new Date().getTime(),
    });
    resetForm();
  };

  return (
    <form onSubmit={addTodo} className="add-todo">
      <input
        type="text"
        name="todo"
        value={todo}
        onChange={onInputChange}
        placeholder="Add details"
        className="form-control"
        autoComplete="off"
      />
      <button type="submit" className="btn btn-primary">
        Add
      </button>
    </form>
  );
};
