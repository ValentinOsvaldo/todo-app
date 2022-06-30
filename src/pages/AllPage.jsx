import { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';
import { AddTodo } from '../components';
import { TodoList } from '../components/TodoList';

export const AllPage = () => {
  const { todos } = useContext(TodoContext);

  return (
    <div className='animate__animated animate__fadeIn'>
      <AddTodo />

      <TodoList todos={todos} />
    </div>
  );
};
