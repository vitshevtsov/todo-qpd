import axios from 'axios';
import IListItem from '../types/data';

async function getAllData() {
  try {
    const responseTasks = await axios.get('http://localhost:8089/api/ToDoList/GetTasks');
    const responseCategories = await axios.get('http://localhost:8089/api/ToDoList/GetCategories');
    return [responseTasks.data, responseCategories.data];
  } catch (error) {
    console.error('Ошибка:', error);
  }
}

async function addTaskToApi(data: IListItem) {
  const url = 'http://localhost:8089/api/ToDoList/AddTask';
  try {
    const response = await axios.post(url, data);
    return response.data;
  } catch (error) {
    console.error('Ошибка:', error);
  }
}

async function addCategoryToApi(data: IListItem) {
  const url = 'http://localhost:8089/api/ToDoList/AddCategory';
  try {
    const response = await axios.post(url, data);
    return response.data;
  } catch (error) {
    console.error('Ошибка:', error);
  }
}

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

async function editCategoryAtApi(data: IListItem) {
  const url = 'http://localhost:8089/api/ToDoList/UpdateCategory';
  try {
    await axios.post(url, data);
  } catch (error) {
    console.error('Ошибка:', error);
  }
}

function deleteTaskFromApi(id: number) {
  try {
    axios.get(`http://localhost:8089/api/ToDoList/RemoveTask/${id}`);
  } catch (error) {
    console.error('Ошибка:', error);
  }
}

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
