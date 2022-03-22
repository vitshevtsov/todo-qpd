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

// addCategory(9, 'Моя_задача9', 'Моя_задача9_Описание');

export default App;
