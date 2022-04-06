import { ITaskItem, ITaskService } from '../../types/data';
/* eslint-disable class-methods-use-this */
import * as localTasks from '../../data/tasks.json';

/**
 * Класс, содержащий методы в соответствии с интерфейсом ITaskService
 * для случая, если используется local storage (исходники хранятся в папке data)
 *
 * методы возвращают значения в соотв-и с контрактом либо undefined (во втором случае,
 * ошибки обрабатываются проверкой на nullable в местах вызова методов)
 */
export default class TaskStorageService implements ITaskService {
  static clearAll() {
    localStorage.clear();
  }

  /**
 * Метод проверяет, есть ли в LS список категорий, если нет - сеттит,
 * возвращает массив категорий либо undefined
 * возвращает массив задач либо undefined
 */
  getTasks() {
    if (!localStorage.getItem('tasks')) {
      localStorage.setItem('tasks', JSON.stringify(localTasks));
    }
    const tasksInStorage = localStorage.getItem('tasks');
    if (tasksInStorage) {
      const result: ITaskItem[] = Array.from(JSON.parse(tasksInStorage));
      return result;
    }
  }

  addTask(newTask: ITaskItem) {
    const tasksInStorage = localStorage.getItem('tasks');
    if (tasksInStorage) {
      const tasksInStorageArr = Array.from(JSON.parse(tasksInStorage));
      const newTaskWithId = { ...newTask, id: Date.now() };
      tasksInStorageArr.push(newTaskWithId);
      localStorage.setItem('tasks', JSON.stringify(tasksInStorageArr));
      return newTaskWithId;
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
