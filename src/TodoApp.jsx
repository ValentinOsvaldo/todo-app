import { HashRouter } from 'react-router-dom';
import { Footer } from './components';
import { TodoProvider } from './context/TodoProvider';
import { TodoRouter } from './router/TodoRouter';

export const TodoApp = () => {
  return (
    <TodoProvider>
      <HashRouter>
        <div className="body container">
          <TodoRouter />
          <Footer />
        </div>
      </HashRouter>
    </TodoProvider>
  );
};
