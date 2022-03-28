import axios from 'axios';
import IListItem from '../types/data';

/**
 * Функция получения с бэка массивов задач и категорий.
 * Возвращает массив, содержащий полученные массивы задач / категорий
 */
async function getAllData() {
  try {
    const responseTasks = await axios.get('http://localhost:8089/api/ToDoList/GetTasks');
    const responseCategories = await axios.get('http://localhost:8089/api/ToDoList/GetCategories');
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
  const url = 'http://localhost:8089/api/ToDoList/AddTask';
  try {
    const response = await axios.post(url, data);
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
  const url = 'http://localhost:8089/api/ToDoList/AddCategory';
  try {
    const response = await axios.post(url, data);
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
  const url = 'http://localhost:8089/api/ToDoList/UpdateTask';
  try {
    const response = await axios.post(url, data);
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
  const url = 'http://localhost:8089/api/ToDoList/UpdateCategory';
  try {
    await axios.post(url, data);
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
    axios.get(`http://localhost:8089/api/ToDoList/RemoveTask/${id}`);
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
    axios.get(`http://localhost:8089/api/ToDoList/RemoveCategory/${id}`);
  } catch (error) {
    console.error('Ошибка:', error);
  }
}

export {
  getAllData, addTaskToApi, addCategoryToApi, editTaskAtApi,
  editCategoryAtApi, deleteTaskFromApi, deleteCategoryFromApi,
};
