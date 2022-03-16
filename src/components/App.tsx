import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './Header';
import Tasks from '../routes/Tasks';
import Categories from '../routes/Categories';
import NoMatchRoute from '../routes/NoMatchRoute';
import NameInput from './UI/NameInput';
import Dropdown from './UI/Dropdown';

import '../styles.css';
import TextArea from './UI/TextArea';

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
      <div className="addTaskForm">
        <h1 className="title">Создание задачи</h1>
        <div className="row1">
          <NameInput
            placeholder="Введите имя задачи"
            label="Имя"
            isRequired
          />
          <Dropdown />
        </div>
        <div className="row2">
          <TextArea
            placeholder="Введите описание задачи"
            label="Описание"
          />
        </div>
        <div className="row3" />

      </div>
    </div>
  );
}
