import { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';
import { AddTodo, TodoList } from '../components';

export const ActivePage = () => {
  const { activeTodos } = useContext(TodoContext);

  return (
    <div className='animate__animated animate__fadeIn'>
      <AddTodo />
      <TodoList todos={activeTodos} message="No active todos" />
    </div>
  );
};
