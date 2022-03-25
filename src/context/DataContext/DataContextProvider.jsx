/* eslint-disable max-len */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/jsx-filename-extension */
import React, { useState, useEffect } from 'react';
import { getAllData } from '../../API/api';
import { DataContext } from './DataContext';
// компоненты, находящиеся в Provider, смогут пользоваться данными контекста (массивы task, categories)

const DataProvider = ({ children }) => {
  // состояние массивов задач и категорий
  const [tasks, setTasks] = useState([]);
  const [categories, setCategories] = useState([]);

  // состояние, хранящее id элемента, на котором кликнули кнопку
  // "редактировать" или "удалить"
  const [openedItemId, setOpenedItemId] = useState(null);

  // получаем списки задач и категорий с api и сохраняем в состояние
  useEffect(async () => {
    const [fetchedTasks, fetchedCategories] = await getAllData();
    setTasks(fetchedTasks);
    setCategories(fetchedCategories);
  }, []);

  const valueDataProvider = {
    tasks,
    categories,
    setTasks,
    setCategories,
    openedItemId,
    setOpenedItemId,
  };

  return (
    //   todo мб лоадер
    <DataContext.Provider value={valueDataProvider}>
      {children}
    </DataContext.Provider>
  );
};
export default DataProvider;
