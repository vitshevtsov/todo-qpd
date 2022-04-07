import axios from 'axios';
import { ICategoryItem, ICategoryService } from '../../types/data';
/* eslint-disable class-methods-use-this */
import {
  allCategoriesUrl, addCategoryUrl,
  editCategoryUrl, getDeleteCategoryUrl,
} from '../../constants/url';

/**
 * Класс, содержащий методы в соответствии с интерфейсом ICategoryService
 * для случая, если используется api сервера (http-request)
 */
export default class CategoryRequestService implements ICategoryService {
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

  async getCategories() {
    const categories = await CategoryRequestService.getRequest(allCategoriesUrl);
    return categories;
  }

  async addCategory(newCategory: ICategoryItem) {
    const result = await CategoryRequestService.postRequest(addCategoryUrl, newCategory);
    return result;
  }

  async editCategory(CategoryToEdit: ICategoryItem) {
    const result = await CategoryRequestService.postRequest(editCategoryUrl, CategoryToEdit);
    return result;
  }

  async deleteCategory(id: number) {
    const result = await CategoryRequestService.getRequest(getDeleteCategoryUrl(id));
    return result;
  }
}
