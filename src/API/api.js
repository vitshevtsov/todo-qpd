/* eslint-disable no-unused-vars */
/* eslint-disable consistent-return */
/* eslint-disable max-len */
/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import React, { useContext, useEffect } from 'react';
import { DataContext } from '../context/DataContext/DataContext';

// async function getAllData() {
//   const responseTasks = await axios.get('http://localhost:8089/api/ToDoList/GetTasks')
// }

async function addTaskToApi(data) {
  const url = 'http://localhost:8089/api/ToDoList/AddTask';
  console.log(data);
  try {
    const response = await axios.post(url, data);
    console.log('Успех:', response.data);
    return response.data;
  } catch (error) {
    console.error('Ошибка:', error);
  }
}

async function addCategoryToApi(data) {
  const url = 'http://localhost:8089/api/ToDoList/AddCategory';
  console.log(data);
  try {
    const response = await axios.post(url, data);
    console.log('Успех:', response.data);
  } catch (error) {
    console.error('Ошибка:', error);
  }
}

// todo ошибка на бэке - не сохраняется измененная категория
async function editTaskAtApi(data) {
  const url = 'http://localhost:8089/api/ToDoList/UpdateTask';
  try {
    const response = await axios.post(url, data);
    console.log('Успех:', response.data);
  } catch (error) {
    console.error('Ошибка:', error);
  }
}

async function editCategoryAtApi(data) {
  const url = 'http://localhost:8089/api/ToDoList/UpdateCategory';

  try {
    const response = await axios.post(url, data);
    console.log('Успех:', response.data);
  } catch (error) {
    console.error('Ошибка:', error);
  }
}

// todo обработка ошибок
function deleteTaskFromApi(id) {
  axios.get(`http://localhost:8089/api/ToDoList/RemoveTask/${id}`);
}

// todo обработка ошибок
function deleteCategoryFromApi(id) {
  axios.get(`http://localhost:8089/api/ToDoList/RemoveCategory/${id}`);
}
export {
  addTaskToApi, addCategoryToApi, editTaskAtApi, editCategoryAtApi, deleteTaskFromApi, deleteCategoryFromApi,
};
