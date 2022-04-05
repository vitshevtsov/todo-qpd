/* eslint-disable import/no-cycle */
/* eslint-disable import/extensions */
import React, { useContext } from 'react';
import { deleteCategoryFromApi, editTaskAtApi } from '../API/api';
import { DataContext, ModalContext } from '../context/context';
import ModalConfirmActionWrapper from './modal/ModalConfirmAction/ModalConfirmActionWrapper';
import { ITaskItem, ICategoryItem } from '../types/data';

/**
 * Компонент, конфигурирующий модальное окно удаления категории
 * возвращает обертку для модальных окон ModalConfirmActionWrapper, содержащую пропсы,
 * необходимые для удаления категории
 */
const DeleteCategory: React.FC = () => {
  const {
    tasks, setTasks, categories, setCategories, openedItemId, setOpenedItemId,
  } = useContext(DataContext);
  const { closeModal } = useContext(ModalContext);

  /**
 * Функция удаляет категорию в api,
 * и сохраняет изменения в state в случае получения ответа сервера
 */
  const deleteCategory = async () => {
    if (openedItemId !== null) {
      const response = await deleteCategoryFromApi(openedItemId);
      if (response) {
        closeModal.closeDeleteCategory();
        setCategories(categories.filter((item: ICategoryItem) => item.id !== openedItemId));
        // в forEach меняем задачи, в которых выбрана удаляемая категория, ставим им categoryId:0, затем меняем в state с помощью map
        tasks.forEach((item: any) => {
          if (item.categoryId === openedItemId) {
            const editedTask = {
              ...item,
              categoryId: 0,
            };
            editTaskAtApi(editedTask);
            setTasks(tasks.map((task: ITaskItem) => {
              if (task.categoryId === openedItemId) {
                return editedTask;
              }
              return task;
            }));
          }
        });
        setOpenedItemId(null);
      } else {
        alert('Произошла ошибка. Попробуйте позднее');
      }
    }
  };

  return (
    <ModalConfirmActionWrapper
      title="Удаление категории"
      question={`Вы уверены, что хотите удалить категорию "${categories.find((item: ICategoryItem) => item.id === openedItemId)!.name}"?`}
      primaryButtonClickHandler={deleteCategory}
    />
  );
};

export default DeleteCategory;
