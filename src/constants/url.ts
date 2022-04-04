/* eslint-disable no-unused-vars */
type Url = string;
type GetUrl = (id: number) => string;

const getTasksUrl: Url = 'http://localhost:8089/api/ToDoList/GetTasks';
const getCategoriesUrl: Url = 'http://localhost:8089/api/ToDoList/GetCategories';
const addTaskUrl: Url = 'http://localhost:8089/api/ToDoList/AddTask';
const addCategoryUrl: Url = 'http://localhost:8089/api/ToDoList/AddCategory';
const editTaskUrl: Url = 'http://localhost:8089/api/ToDoList/UpdateTask';
const editCategoryUrl: Url = 'http://localhost:8089/api/ToDoList/UpdateCategory';
const getDeleteTaskUrl:GetUrl = (id) => `http://localhost:8089/api/ToDoList/RemoveTask/${id}`;
const getDeleteCategoryUrl:GetUrl = (id) => `http://localhost:8089/api/ToDoList/RemoveCategory/${id}`;

export {
  getTasksUrl, getCategoriesUrl, addTaskUrl, addCategoryUrl,
  editTaskUrl, editCategoryUrl, getDeleteTaskUrl, getDeleteCategoryUrl,
};
