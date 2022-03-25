/* eslint-disable no-unused-vars */
/* eslint-disable consistent-return */
/* eslint-disable max-len */
/* eslint-disable import/prefer-default-export */
import React, { useContext, useEffect } from 'react';
import { DataContext } from '../context/DataContext/DataContext';

async function addTaskToApi(data) {
  const url = 'http://localhost:8089/api/ToDoList/AddTask';
  console.log(data);

  try {
    const response = await fetch(url, {
      method: 'POST', // или 'PUT'
      body: JSON.stringify(data), // данные могут быть 'строкой' или {объектом}!
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const json = await response.json();
    console.log('Успех:', JSON.stringify(json));
  } catch (error) {
    console.error('Ошибка:', error);
  }
}

async function addCategoryToApi(data) {
  const url = 'http://localhost:8089/api/ToDoList/AddCategory';
  console.log(data);

  try {
    const response = await fetch(url, {
      method: 'POST', // или 'PUT'
      body: JSON.stringify(data), // данные могут быть 'строкой' или {объектом}!
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const json = await response.json();
    console.log('Успех:', JSON.stringify(json));
  } catch (error) {
    console.error('Ошибка:', error);
  }
}

// todo ошибка на бэке - не сохраняется измененная категория
async function editTaskAtApi(data) {
  const url = 'http://localhost:8089/api/ToDoList/UpdateTask';
  try {
    console.log(data);
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const json = await response.json();
    console.log('Успех:', JSON.stringify(json));
  } catch (error) {
    console.error('Ошибка:', error);
  }
}

async function editCategoryAtApi(data) {
  const url = 'http://localhost:8089/api/ToDoList/UpdateCategory';

  try {
    const response = await fetch(url, {
      method: 'POST', // или 'PUT'
      body: JSON.stringify(data), // данные могут быть 'строкой' или {объектом}!
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const json = await response.json();
    console.log('Успех:', JSON.stringify(json));
  } catch (error) {
    console.error('Ошибка:', error);
  }
}

// todo обработка ошибок
function deleteTaskFromApi(id) {
  fetch(`http://localhost:8089/api/ToDoList/RemoveTask/${id}`);
}

// todo обработка ошибок
function deleteCategoryFromApi(id) {
  fetch(`http://localhost:8089/api/ToDoList/RemoveCategory/${id}`);
}
export {
  addTaskToApi, addCategoryToApi, editTaskAtApi, editCategoryAtApi, deleteTaskFromApi, deleteCategoryFromApi,
};
