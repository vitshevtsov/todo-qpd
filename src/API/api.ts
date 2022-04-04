import axios from 'axios';
import IListItem from '../types/data';
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
async function addTaskToApi(data: IListItem) {
  try {
    const response = await axios.post(addTaskUrl, data);
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
async function addCategoryToApi(data: IListItem) {
  try {
    const response = await axios.post(addCategoryUrl, data);
    return response.data;
  } catch (error) {
    console.error('Ошибка:', error);
  }
}

/**
 * Функция редактирования задачи в БД.
 * Отправляет post запрос с измененными данными, ничего не возвращает
 */
// todo ошибка на бэке - не сохраняется измененная категория
async function editTaskAtApi(data: IListItem) {
  try {
    const response = await axios.post(editTaskUrl, data);
    console.log(response);
  } catch (error) {
    console.error('Ошибка:', error);
  }
}

/**
 * Функция редактирования категории в БД.
 * Отправляет post запрос с измененными данными, ничего не возвращает
 */
async function editCategoryAtApi(data: IListItem) {
  try {
    await axios.post(editCategoryUrl, data);
  } catch (error) {
    console.error('Ошибка:', error);
  }
}

/**
 * Функция удаления задачи из БД.
 * Отправляет get запрос с id удаляемой задачи, ничего не возвращает
 */
function deleteTaskFromApi(id: number) {
  try {
    axios.get(getDeleteTaskUrl(id));
  } catch (error) {
    console.error('Ошибка:', error);
  }
}

/**
 * Функция удаления категории из БД.
 * Отправляет get запрос с id удаляемой категории, ничего не возвращает
 */
function deleteCategoryFromApi(id: number) {
  try {
    axios.get(getDeleteCategoryUrl(id));
  } catch (error) {
    console.error('Ошибка:', error);
  }
}

export {
  getAllData, addTaskToApi, addCategoryToApi, editTaskAtApi,
  editCategoryAtApi, deleteTaskFromApi, deleteCategoryFromApi,
};
