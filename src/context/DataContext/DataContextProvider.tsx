import React, { useState, useEffect } from 'react';
import { getAllData } from '../../API/api';
import { DataContext } from './DataContext';
import { ITaskItem, ICategoryItem, IDataProviderProps } from '../../types/data';

/**
 * Компонент, возвращающий провайдер контекста данных. Компоненты, находящиеся в Provider (подписчики),
 *  смогут пользоваться данными контекста
 *
 * В контексте хранятся:
 * - tasks, categories - массивы задач и категорий (первично подргужаются с api в useEffect ниже)
 * - setTasks, setCategories - сеттеры для изменения состояния в подписчиках провайдера
 * - openedItemId, setOpenedItemId - id текущего элемента, открытого в модальном окне
 *  (0 - при создании новых записей, int - при редактировании / удалении, null - если модалки не открыты)
 *
 * возвращает провайдер с переданным значением и слотом для children
 */

const DataProvider = ({ children }: IDataProviderProps) => {
  const [tasks, setTasks] = useState<ITaskItem[] | never[]>([]);
  const [categories, setCategories] = useState<ICategoryItem[] | never[]>([]);
  const [openedItemId, setOpenedItemId] = useState<number | null>(null);

  // Получаем списки задач и категорий с api и сохраняем в состояние
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
