import React, { useState, useEffect, useContext } from 'react';
import { ITaskItem, ICategoryItem } from '../../types/data';
import { DataContext, ServiceContext } from '../context';

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

const DataProvider: React.FC = ({ children }) => {
  const [tasks, setTasks] = useState<ITaskItem[] | never[]>([]);
  const [categories, setCategories] = useState<ICategoryItem[] | never[]>([]);
  const [openedItemId, setOpenedItemId] = useState<number | null>(null);

  const { taskService, categoryService } = useContext(ServiceContext);

  // Получаем списки задач и категорий с сервиса и сохраняем в состояние
  useEffect(() => {
    const fetchData = async () => {
      const tasksFromService = await taskService.getTasks();
      const categoriesFromService = await categoryService.getCategories();
      if (tasksFromService && categoriesFromService) {
        setTasks(tasksFromService);
        setCategories(categoriesFromService);
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
