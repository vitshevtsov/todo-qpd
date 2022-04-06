import axios from 'axios';
import { ITaskItem, ITaskService } from '../../types/data';
/* eslint-disable class-methods-use-this */
import {
  allTasksUrl, addTaskUrl,
  editTaskUrl, getDeleteTaskUrl,
} from '../../constants/url';

export default class TaskRequestService implements ITaskService {
  // todo мб в верхнеуровневый класс перенести 2 статич. метода
  static async getRequest(url :string) {
    try {
      const response = await axios.get(url);
      return (response.data) ? response.data : response;
    } catch (error) {
      console.error('Ошибка:', error);
    }
  }

  static async postRequest(url: string, data: object) {
    try {
      const response = await axios.post(url, data);
      return response.data;
    } catch (error) {
      console.error('Ошибка:', error);
    }
  }

  async getTasks() {
    const tasks = await TaskRequestService.getRequest(allTasksUrl);
    return tasks;
  }

  async addTask(newTask: ITaskItem) {
    const result = await TaskRequestService.postRequest(addTaskUrl, newTask);
    return result;
  }

  async editTask(taskToEdit: ITaskItem) {
    const result = await TaskRequestService.postRequest(editTaskUrl, taskToEdit);
    return result;
  }

  async deleteTask(id: number) {
    const result = await TaskRequestService.getRequest(getDeleteTaskUrl(id));
    return result;
  }
}
