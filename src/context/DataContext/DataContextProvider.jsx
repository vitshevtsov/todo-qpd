/* eslint-disable max-len */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/jsx-filename-extension */
import React, { useState, useEffect } from 'react';
import { DataContext } from './DataContext';
// компоненты, находящиеся в Provider, смогут пользоваться данными контекста (массивы task, categories)

const DataProvider = ({ children }) => {
  // состояние массивов задач и категорий
  const [tasks, setTasks] = useState([]);
  const [categories, setCategories] = useState([]);
  // получаем списки задач и категорий с api и сохраняем в состояние
  useEffect(() => {
    fetch('http://localhost:8089/api/ToDoList/GetTasks')
      .then((res) => res.json())
      .then(
        (result) => {
          setTasks(result);
        },
        (error) => {
          alert(error);
        },
      );

    fetch('http://localhost:8089/api/ToDoList/GetCategories')
      .then((res) => res.json())
      .then(
        (result) => {
          setCategories(result);
        },
        (error) => {
          alert(error);
        },
      );
  }, []);

  // состояние, хранящее id элемента, на котором кликнули кнопку
  // "редактировать" или "удалить"
  const [openedTaskId, setOpenedTaskId] = useState(null);
  const [openedCategoryId, setOpenedCategoryId] = useState(null);

  const valueDataProvider = {
    tasks,
    categories,
    setTasks,
    setCategories,
  };

  return (
    //   todo мб лоадер
    <DataContext.Provider value={valueDataProvider}>
      {children}
    </DataContext.Provider>
  );
};
export default DataProvider;
