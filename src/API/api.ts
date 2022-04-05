import { ITaskItem, ICategoryItem } from '../types/data';
import TaskRequestService from './TaskRequestService';
import {
  allTasksUrl, allCategoriesUrl, addTaskUrl, addCategoryUrl, editCategoryUrl, getDeleteTaskUrl, getDeleteCategoryUrl,
} from '../constants/url';

/**
 * Функция получения с бэка массивов задач и категорий.
 * Возвращает массив, содержащий полученные массивы задач / категорий
 */
async function getAllData() {
  const tasks = await TaskRequestService.getRequest(allTasksUrl);
  const categories = await TaskRequestService.getRequest(allCategoriesUrl);
  return [tasks, categories];
}

/**
 * Функция добавления новой задачи в БД.
 * возвращает ответ класса,
 * отвечающего за манипуляции с данными, содержащий инфо о новой задаче (в т.ч. id),
 * результат обрабатывается в месте вызова (сетится в состояние)
 */
async function addTaskToApi(data: ITaskItem) {
  const result = await TaskRequestService.postRequest(addTaskUrl, data);
  return result;
}

/**
 * Функция добавления новой категории в БД.
 * Возвращает возвращает ответ класса,
 * отвечающего за манипуляции с данными, содержащий инфо о новой категории (в т.ч. id),
 * результат обрабатывается в месте вызова (сетится в состояние)
 */
async function addCategoryToApi(data: ICategoryItem) {
  const result = await TaskRequestService.postRequest(addCategoryUrl, data);
  return result;
}

/**
 * Функция редактирования категории в БД.
 * Отправляет post запрос с измененными данными, возвращает ответ класса,
 * отвечающего за манипуляции с данными
 */
async function editCategoryAtApi(data: ICategoryItem) {
  const result = await TaskRequestService.postRequest(editCategoryUrl, data);
  return result;
}

/**
 * Функция удаления задачи из БД.
 * Отправляет get запрос с id удаляемой задачи, возвращает ответ класса,
 * отвечающего за манипуляции с данными
 */
async function deleteTaskFromApi(id: number) {
  const result = await TaskRequestService.getRequest(getDeleteTaskUrl(id));
  return result;
}

/**
 * Функция удаления категории из БД.
 * Отправляет get запрос с id удаляемой категории, возвращает ответ класса,
 * отвечающего за манипуляции с данными
 */
async function deleteCategoryFromApi(id: number) {
  const result = await TaskRequestService.getRequest(getDeleteCategoryUrl(id));
  return result;
}

export {
  getAllData, addTaskToApi, addCategoryToApi,
  editCategoryAtApi, deleteTaskFromApi, deleteCategoryFromApi,
};
