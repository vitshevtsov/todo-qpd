/* eslint-disable no-unused-vars */
/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/jsx-filename-extension */
import React, { useState, useEffect } from 'react';

import { DataContext } from './DataContext';
// компоненты, находящиеся в Provider, смогут пользоваться методами контекста openModal, closeModal

const DataProvider = ({ children }) => {
  // состояние массивов задач и категорий
  const [tasks, setTasks] = useState([]);
  const [categories, setCategories] = useState([]);

  // состояние, хранящее id элемента, на котором кликнули кнопку
  // "редактировать" или "удалить"
  const [openedTaskId, setOpenedTaskId] = useState(null);
  const [openedCategoryId, setOpenedCategoryId] = useState(null);

  function getTasksFromApi() {
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
  }
  function getCategoriesFromApi() {
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
  }

  // Примечание: пустой массив зависимостей [] означает, что
  // этот useEffect будет запущен один раз
  // аналогично componentDidMount()
  useEffect(() => {
    getTasksFromApi();
    getCategoriesFromApi();
    console.log('fetch is done');
  }, []);

  const valueDataProvider = {
    tasks,
    categories,
  };

  return (
    //   todo мб лоадер
    <DataContext.Provider value={valueDataProvider}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
