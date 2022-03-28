import React, { useState, useEffect } from 'react';
import { getAllData } from '../../API/api';
import { DataContext } from './DataContext';
// компоненты, находящиеся в Provider, смогут пользоваться данными контекста (массивы task, categories)
import IListItem from '../../types/data';

interface IDataProviderProps {
  children: React.ReactChild | React.ReactNode;
}

const DataProvider = ({ children }: IDataProviderProps) => {
  // состояние массивов задач и категорий
  const [tasks, setTasks] = useState<IListItem[] | never[]>([]);
  const [categories, setCategories] = useState<IListItem[] | never[]>([]);

  // состояние, хранящее id элемента, на котором кликнули кнопку
  // "редактировать" или "удалить"
  const [openedItemId, setOpenedItemId] = useState<number | null>(null);

  // получаем списки задач и категорий с api и сохраняем в состояние
  useEffect(() => {
    const fetchData = async () => {
      const fetchedData: any[] | undefined = await getAllData();
      if (fetchedData) {
        setTasks(fetchedData[0]);
        setCategories(fetchedData[1]);
      } else {
        console.error('Please repeat fetching data');
      }
    };
    fetchData();
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
    <DataContext.Provider value={valueDataProvider}>
      {children}
    </DataContext.Provider>
  );
};
export default DataProvider;
