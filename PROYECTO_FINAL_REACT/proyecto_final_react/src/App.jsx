import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import HomePage from './HomePage';
import TaskFormPage from './TaskFormPage';

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/crear" element={<TaskFormPage />} />
        <Route path="/editar/:id" element={<TaskFormPage />} />
      </Routes>
    </BrowserRouter>
  );
}
