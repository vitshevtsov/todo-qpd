import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './Header';
import Tasks from '../routes/Tasks';
import Categories from '../routes/Categories';
import NoMatchRoute from '../routes/NoMatchRoute';
import '../styles.css';
import ModalProvider from '../context/ModalContext/ModalContextProvider';
import DataProvider from '../context/DataContext/DataContextProvider';
// import { addTask } from '../API/api';
// import { addCategory } from '../API/api';
// import { editTask } from '../API/api';
// import { editCategory } from '../API/api';
// import { deleteTask } from '../API/api';

const App: React.FC = () => (
  <DataProvider>
    <ModalProvider>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Navigate to="tasks" replace />} />
          <Route path="tasks" element={<Tasks />} />
          <Route path="categories" element={<Categories />} />
          <Route path="*" element={<NoMatchRoute />} />
        </Routes>
      </div>
    </ModalProvider>
  </DataProvider>

);

// editTask(9, 'Моя_задача9', 'Моя_задача9_Описание');
// editCategory(9, 'Категория9', 'Мое описание категории9');
// deleteTask(9);

export default App;
