import React from 'react';
import { ServiceContext } from './ServiceContext';
import { IProviderProps } from '../../types/data';
import TaskRequestService from '../../API/RequestService/TaskRequestService';
import CategoryRequestService from '../../API/RequestService/CategoryRequestService';

// todo description edit
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

const ServiceProvider = ({ children }: IProviderProps) => {
  const valueServiceProvider = {
    taskService: new TaskRequestService(),
    categoryService: new CategoryRequestService(),
  };

  return (
    <ServiceContext.Provider value={valueServiceProvider}>
      {children}
    </ServiceContext.Provider>
  );
};
export default ServiceProvider;
