import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './Header';
import Tasks from '../routes/Tasks';
import Categories from '../routes/Categories';
import NoMatchRoute from '../routes/NoMatchRoute';
import NameInput from './UI/NameInput';

import '../styles.css';

export default function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="tasks" replace />} />
        <Route path="tasks" element={<Tasks />} />
        <Route path="categories" element={<Categories />} />
        <Route path="*" element={<NoMatchRoute />} />
      </Routes>
      <NameInput />
    </div>
  );
}
