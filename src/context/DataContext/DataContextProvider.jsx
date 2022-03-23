/* eslint-disable max-len */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/jsx-filename-extension */
import React, { useState, useEffect } from 'react';
import { DataContext } from './DataContext';
import { getTasksFromApi, getCategoriesFromApi } from '../../API/api';
// компоненты, находящиеся в Provider, смогут пользоваться данными контекста (массивы task, categories)

const DataProvider = ({ children }) => {
  // состояние массивов задач и категорий
  const [tasks, setTasks] = useState([]);
  const [categories, setCategories] = useState([]);

  // состояние, хранящее id элемента, на котором кликнули кнопку
  // "редактировать" или "удалить"
  const [openedTaskId, setOpenedTaskId] = useState(null);
  const [openedCategoryId, setOpenedCategoryId] = useState(null);

  // Примечание: пустой массив зависимостей [] означает, что
  // этот useEffect будет запущен один раз
  // аналогично componentDidMount()
  useEffect(() => {
    getTasksFromApi(setTasks);
    getCategoriesFromApi(setCategories);
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
