import React from 'react';
import { ServiceContext } from './ServiceContext';
import { IProviderProps } from '../../types/data';
import TaskRequestService from '../../API/RequestService/TaskRequestService';
import CategoryRequestService from '../../API/RequestService/CategoryRequestService';

/**
 * Для переключения на сервисы local storage заменить импорты request-сервисов на данные импорты
 */

// import TaskStorageService from '../../API/StorageService/TaskStorageService';
// import CategoryStorageService from '../../API/StorageService/CategoryStorageService';

/**
 * Компонент, возвращающий провайдер контекста сервиса работы с данными. Компоненты, находящиеся в Provider (подписчики),
 *  смогут пользоваться данными контекста
 *
 * В контексте хранятся:
 * - taskService - экземпляр сервис-класса работы с задачами (request или storage), использующийся в данный момент
 * - categoryService - экземпляр сервис-класса работы с категориями (request или storage), использующийся в данный момент
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
