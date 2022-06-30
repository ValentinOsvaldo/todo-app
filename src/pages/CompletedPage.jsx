import { useContext } from 'react';
import { TodoList } from '../components';
import { TodoContext } from '../context/TodoContext';

export const CompletedPage = () => {
  const { completedTodos, onDeleteTodos } = useContext(TodoContext);

  return (
    <div className='animate__animated animate__fadeIn'>
      <TodoList
        todos={completedTodos}
        completed="true"
        message='No completed todos'
      />
      <nav className='d-flex justify-content-end'>
        <button className="btn btn-danger" onClick={onDeleteTodos}>
          <box-icon name="trash-alt" color="white"></box-icon>
          Delete all
        </button>
      </nav>
    </div>
  );
};
