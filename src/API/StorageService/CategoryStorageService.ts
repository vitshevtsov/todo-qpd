import { ICategoryItem, ICategoryService } from '../../types/data';
/* eslint-disable class-methods-use-this */
import * as localTasks from '../../data/categories.json';

/**
 * Класс, содержащий методы в соответствии с интерфейсом ICategoryService
 * для случая, если используется local storage (исходники хранятся в папке data)
 *
 * методы возвращают значения в соотв-и с контрактом либо undefined (во втором случае,
 * ошибки обрабатываются проверкой на nullable в местах вызова методов)
 */
export default class CategoryStorageService implements ICategoryService {
/**
 * Метод проверяет, есть ли в LS список категорий, если нет - сеттит,
 * возвращает массив категорий либо undefined
 * возвращает массив задач либо undefined
 */
  getCategories() {
    if (!localStorage.getItem('categories')) {
      localStorage.setItem('categories', JSON.stringify(localTasks));
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
