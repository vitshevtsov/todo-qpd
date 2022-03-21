/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/jsx-filename-extension */
import React, { useState, useEffect } from 'react';

import { DataContext } from './DataContext';
// компоненты, находящиеся в Provider, смогут пользоваться методами контекста openModal, closeModal

const DataProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [categories, setCategories] = useState([]);

  // Примечание: пустой массив зависимостей [] означает, что
  // этот useEffect будет запущен один раз
  // аналогично componentDidMount()
  useEffect(() => {
    fetch('http://localhost:8089/api/ToDoList/GetTasks')
      .then((res) => res.json())
      .then(
        (result) => {
        //   setIsLoaded(true);
          setTasks(result);
        },
        // Примечание: важно обрабатывать ошибки именно здесь, а не в блоке catch(),
        // чтобы не перехватывать исключения из ошибок в самих компонентах.
        (error) => {
        //   setIsLoaded(true);
        //   setError(error);
          alert(error);
        },
      );

    fetch('http://localhost:8089/api/ToDoList/GetCategories')
      .then((res) => res.json())
      .then(
        (result) => {
        //   setIsLoaded(true);
          setCategories(result);
        },
        // Примечание: важно обрабатывать ошибки именно здесь, а не в блоке catch(),
        // чтобы не перехватывать исключения из ошибок в самих компонентах.
        (error) => {
        //   setIsLoaded(true);
        //   setError(error);
          alert(error);
        },
      );
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
