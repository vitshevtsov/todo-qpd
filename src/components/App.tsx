import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './Header';
import Tasks from '../routes/Tasks';
import Categories from '../routes/Categories';
import NoMatchRoute from '../routes/NoMatchRoute';
import '../styles.css';
import ModalProvider from '../context/ModalContext/ModalContextProvider';
import DataProvider from '../context/DataContext/DataContextProvider';

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

export default App;
