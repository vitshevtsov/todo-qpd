import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './Header';
import Tasks from '../routes/Tasks';
import Categories from '../routes/Categories';
import NoMatchRoute from '../routes/NoMatchRoute';
import '../styles.css';
import AddTaskForm from './AddTaskForm';
import AddCategoryForm from './AddCategoryForm';
import DeleteTask from './DeleteTask';

const App: React.FC = () => (
  <div className="App">
    <Header />
    <Routes>
      <Route path="/" element={<Navigate to="tasks" replace />} />
      <Route path="tasks" element={<Tasks />} />
      <Route path="categories" element={<Categories />} />
      <Route path="*" element={<NoMatchRoute />} />
    </Routes>

    <AddTaskForm />
    <AddCategoryForm />
    <DeleteTask />

  </div>
);

export default App;
// todo механизм динамического размера для кнопок (мб div-обертка)
