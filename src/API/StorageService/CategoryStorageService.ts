import { ICategoryItem, ICategoryService } from '../../types/data';
/* eslint-disable class-methods-use-this */
import * as localTasks from '../../data/categories.json';

export default class CategoryStorageService implements ICategoryService {
  // возвращает массив задач либо undefined
  getCategories() {
    if (!localStorage.getItem('categories')) {
      localStorage.setItem('categories', JSON.stringify(localTasks));
      console.log('set');
    }
    const categoriesInStorage = localStorage.getItem('categories');
    if (categoriesInStorage) {
      const result: ICategoryItem[] = Array.from(JSON.parse(categoriesInStorage));
      return result;
    }
  }

  addCategory(newCategory: ICategoryItem) {
    const categoriesInStorage = localStorage.getItem('categories');
    if (categoriesInStorage) {
      const categoriesInStorageArr = Array.from(JSON.parse(categoriesInStorage));
      const newCategoryWithId = { ...newCategory, id: Date.now() };
      categoriesInStorageArr.push(newCategoryWithId);
      localStorage.setItem('categories', JSON.stringify(categoriesInStorageArr));
      return newCategoryWithId;
    }
  }

  editCategory(categoryToEdit: ICategoryItem) {
    const categoriesInStorage = localStorage.getItem('categories');
    if (categoriesInStorage) {
      const categoriesInStorageArr = Array.from(JSON.parse(categoriesInStorage));
      const indexOfEditedTask = categoriesInStorageArr.findIndex((item: any) => item.id === categoryToEdit.id);
      if (indexOfEditedTask >= 0) {
        categoriesInStorageArr[indexOfEditedTask] = categoryToEdit;
        localStorage.setItem('categories', JSON.stringify(categoriesInStorageArr));
        return categoryToEdit;
      }
    }
  }

  deleteCategory(id: number) {
    const categoriesInStorage = localStorage.getItem('categories');
    if (categoriesInStorage) {
      let categoriesInStorageArr = Array.from(JSON.parse(categoriesInStorage));
      const indexOfDeletedCategory = categoriesInStorageArr.findIndex((item: any) => item.id === id);
      if (indexOfDeletedCategory >= 0) {
        categoriesInStorageArr = categoriesInStorageArr.filter((item: any) => item.id !== id);
        localStorage.setItem('categories', JSON.stringify(categoriesInStorageArr));
        return id;
      }
    }
  }
}
