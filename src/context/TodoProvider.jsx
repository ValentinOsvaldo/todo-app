import { useEffect, useState } from 'react';
import { TodoContext } from './TodoContext';

const saveTodos = () => {
  return JSON.parse(localStorage.getItem('todos')) || [];
};

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState(saveTodos);
  const [activeTodos, setActiveTodos] = useState();
  const [completedTodos, setCompletedTodos] = useState();

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const onAddTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const onToggleTodo = (id) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          done: !todo.done,
        };
      }

      return todo;
    });

    setTodos(newTodos);
  };

  // * Get active todos
  useEffect(() => {
    const active = todos.filter((todo) => !todo.done);
    setActiveTodos(active);
  }, [todos]);

  // * Get active todos
  useEffect(() => {
    const completed = todos.filter((todo) => todo.done);
    setCompletedTodos(completed);
  }, [todos]);

  // * Delete todo
  const onDeleteTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const onDeleteTodos = () => setTodos([]);

  return (
    <TodoContext.Provider
      value={{
        todos,
        activeTodos,
        completedTodos,
        onAddTodo,
        onToggleTodo,
        onDeleteTodo,
        onDeleteTodos,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
