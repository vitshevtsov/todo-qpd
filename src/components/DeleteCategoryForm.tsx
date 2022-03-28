/* eslint-disable import/no-cycle */
/* eslint-disable import/extensions */
import React, { useContext } from 'react';
import { deleteCategoryFromApi, editTaskAtApi } from '../API/api';
import { DataContext, ModalContext } from '../context/context';
import ModalConfirmActionWrapper from './modal/ModalConfirmActionWrapper';
import IListItem from '../types/data';

const DeleteCategory: React.FC = () => {
  const {
    tasks, setTasks, categories, setCategories, openedItemId, setOpenedItemId,
  } = useContext(DataContext);
  const { closeModal } = useContext(ModalContext);

  const deleteCategory = () => {
    if (openedItemId !== null) {
      deleteCategoryFromApi(openedItemId);
    }
    setCategories(categories.filter((item: IListItem) => item.id !== openedItemId));

    // в forEach меняем задачи, в которых выбрана удаляемая категория, ставим categoryId:0
    tasks.forEach((item: any) => {
      console.log(item.categoryId === openedItemId);
      if (item.categoryId === openedItemId) {
        const editedTask = {
          ...item,
          categoryId: 0,
        };
        console.log(editedTask);
        editTaskAtApi(editedTask);
        setTasks(tasks.map((task: IListItem) => {
          if (task.categoryId === openedItemId) {
            console.log('here');
            return editedTask;
          }
          return task;
        }));
      }
    });

    setOpenedItemId(null);
    closeModal.closeDeleteCategory();
  };

  return (
    <ModalConfirmActionWrapper
      title="Удаление категории"
      question={`Вы уверены, что хотите удалить категорию "${categories.find((item: IListItem) => item.id === openedItemId)!.name}"?`}
      primaryButtonClickHandler={deleteCategory}
    />
  );
};

export default DeleteCategory;
