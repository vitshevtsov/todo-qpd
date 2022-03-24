/* eslint-disable no-unused-vars */
/* eslint-disable consistent-return */
/* eslint-disable max-len */
/* eslint-disable import/prefer-default-export */
import React, { useContext, useEffect } from 'react';
import { DataContext } from '../context/DataContext/DataContext';

async function addTaskToApi(id, name, description, categoryId) {
  const url = 'http://localhost:8089/api/ToDoList/AddTask';
  const data = {
    id,
    name,
    description,
    categoryId,
  };

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

async function addCategoryToApi(id, name, description) {
  const url = 'http://localhost:8089/api/ToDoList/AddCategory';
  const data = {
    id,
    name,
    description,
  };

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

function deleteTask(id) {
  fetch(`http://localhost:8089/api/ToDoList/RemoveTask/${id}`);
}

function deleteCategory(id) {
  fetch(`http://localhost:8089/api/ToDoList/RemoveCategory/${id}`);
}
export {
  addTaskToApi, addCategoryToApi, editTaskAtApi, editCategoryAtApi, deleteTask, deleteCategory,
};
