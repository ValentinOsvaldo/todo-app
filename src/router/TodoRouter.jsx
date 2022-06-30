import { Route, Routes, Navigate } from 'react-router-dom';
import { Navbar } from '../components';
import { ActivePage, AllPage, CompletedPage } from '../pages';

export const TodoRouter = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<AllPage />} />
        <Route path="active" element={<ActivePage />} />
        <Route path="completed" element={<CompletedPage />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};
