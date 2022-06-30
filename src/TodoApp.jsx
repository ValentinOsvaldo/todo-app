import { BrowserRouter } from 'react-router-dom';
import { Footer } from './components';
import { TodoProvider } from './context/TodoProvider';
import { TodoRouter } from './router/TodoRouter';

export const TodoApp = () => {
  return (
    <TodoProvider>
      <BrowserRouter>
        <div className="body container">
          <TodoRouter />
          <Footer />
        </div>
      </BrowserRouter>
    </TodoProvider>
  );
};
