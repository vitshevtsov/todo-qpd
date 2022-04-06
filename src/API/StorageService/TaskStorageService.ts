import { ITaskItem } from '../../types/data';
/* eslint-disable class-methods-use-this */
import * as localTasks from '../../data/tasks.json';

export default class TaskStorageService {
  static clearAll() {
    localStorage.clear();
  }

  // возвращает массив задач либо undefined
  getTasks() {
    if (!localStorage.getItem('tasks')) {
      localStorage.setItem('tasks', JSON.stringify(localTasks));
      console.log('set');
    }
    const tasksInStorage = localStorage.getItem('tasks');
    if (tasksInStorage) {
      return Array.from(JSON.parse(tasksInStorage));
    }
  }

  addTask(newTask: ITaskItem) {
    const tasksInStorage = localStorage.getItem('tasks');
    if (tasksInStorage) {
      const tasksInStorageArr = Array.from(JSON.parse(tasksInStorage));
      const newTaskwithId = { ...newTask, id: Date.now() };
      tasksInStorageArr.push(newTaskwithId);
      localStorage.setItem('tasks', JSON.stringify(tasksInStorageArr));
      return newTaskwithId;
    }
  }

  editTask(taskToEdit: ITaskItem) {
    const tasksInStorage = localStorage.getItem('tasks');
    if (tasksInStorage) {
      const tasksInStorageArr = Array.from(JSON.parse(tasksInStorage));
      const indexOfEditedTask = tasksInStorageArr.findIndex((item: any) => item.id === taskToEdit.id);
      if (indexOfEditedTask >= 0) {
        tasksInStorageArr[indexOfEditedTask] = taskToEdit;
        localStorage.setItem('tasks', JSON.stringify(tasksInStorageArr));
        return taskToEdit;
      }
    }
  }

  deleteTask(id: number) {
    const tasksInStorage = localStorage.getItem('tasks');
    if (tasksInStorage) {
      let tasksInStorageArr = Array.from(JSON.parse(tasksInStorage));
      const indexOfDeletedTask = tasksInStorageArr.findIndex((item: any) => item.id === id);
      if (indexOfDeletedTask >= 0) {
        tasksInStorageArr = tasksInStorageArr.filter((item: any) => item.id !== id);
        localStorage.setItem('tasks', JSON.stringify(tasksInStorageArr));
        return id;
      }
    }
  }
}
