import axios from 'axios';
import { ITaskItem, ICategoryItem } from '../types/data';
import {
  getTasksUrl, getCategoriesUrl, addTaskUrl, addCategoryUrl,
  editTaskUrl, editCategoryUrl, getDeleteTaskUrl, getDeleteCategoryUrl,
} from '../constants/url';

/**
 * Функция получения с бэка массивов задач и категорий.
 * Возвращает массив, содержащий полученные массивы задач / категорий
 */
async function getAllData() {
  try {
    const responseTasks = await axios.get(getTasksUrl);
    const responseCategories = await axios.get(getCategoriesUrl);
    return [responseTasks.data, responseCategories.data];
  } catch (error) {
    console.error('Ошибка:', error);
  }
}

/**
 * Функция добавления новой задачи в БД.
 * Возвращает ответ сервера, содержащий инфо о новой задаче (в т.ч. id),
 * результат обрабатывается в месте вызова (сетится в состояние)
 */
async function addTaskToApi(data: ITaskItem) {
  try {
    const response = await axios.post(addTaskUrl, data);
    console.log('success');
    return response.data;
  } catch (error) {
    console.error('Ошибка:', error);
  }
}

/**
 * Функция добавления новой категории в БД.
 * Возвращает ответ сервера, содержащий инфо о новой категории (в т.ч. id),
 * результат обрабатывается в месте вызова (сетится в состояние)
 */
async function addCategoryToApi(data: ICategoryItem) {
  try {
    const response = await axios.post(addCategoryUrl, data);
    return response.data;
  } catch (error) {
    console.error('Ошибка:', error);
  }
}

/**
 * Функция редактирования задачи в БД.
 * Отправляет post запрос с измененными данными, возвращает ответ сервера
 */
// todo ошибка на бэке - не сохраняется измененная категория
async function editTaskAtApi(data: ITaskItem) {
  try {
    const response = await axios.post(editTaskUrl, data);
    return response.data;
  } catch (error) {
    console.error('Ошибка:', error);
  }
}

/**
 * Функция редактирования категории в БД.
 * Отправляет post запрос с измененными данными, возвращает ответ сервера
 */
async function editCategoryAtApi(data: ICategoryItem) {
  try {
    const response = await axios.post(editCategoryUrl, data);
    return response.data;
  } catch (error) {
    console.error('Ошибка:', error);
  }
}

/**
 * Функция удаления задачи из БД.
 * Отправляет get запрос с id удаляемой задачи, возвращает ответ сервера
 */
async function deleteTaskFromApi(id: number) {
  try {
    const response = await axios.get(getDeleteTaskUrl(id));
    return response;
  } catch (error) {
    console.error('Ошибка:', error);
  }
}

/**
 * Функция удаления категории из БД.
 * Отправляет get запрос с id удаляемой категории, возвращает ответ сервера
 */
async function deleteCategoryFromApi(id: number) {
  try {
    const response = await axios.get(getDeleteCategoryUrl(id));
    return response;
  } catch (error) {
    console.error('Ошибка:', error);
  }
}

export {
  getAllData, addTaskToApi, addCategoryToApi, editTaskAtApi,
  editCategoryAtApi, deleteTaskFromApi, deleteCategoryFromApi,
};
