/* eslint-disable max-len */
/* eslint-disable no-undef */
/* eslint-disable no-unused-expressions */
/* eslint-disable import/no-cycle */
/* eslint-disable import/extensions */
import React, { useContext } from 'react';
import { deleteCategoryFromApi, editTaskAtApi } from '../API/api';
import { DataContext, ModalContext } from '../context/context';
import ModalConfirmActionWrapper from './modal/ModalConfirmActionWrapper';

const DeleteCategory = () => {
  const {
    tasks, setTasks, categories, setCategories, openedItemId, setOpenedItemId,
  } = useContext(DataContext);
  const { closeModal } = useContext(ModalContext);

  const deleteCategory = () => {
    deleteCategoryFromApi(openedItemId);
    // todo типизация коллбэка map
    setCategories(categories.filter((item: { id: any; name?: any; description?: any;}) => item.id !== openedItemId));

    // в forEach меняем задачи, в которых выбрана удаляемая категория, ставим categoryId:0
    tasks.forEach((item: any) => {
      if (item.categoryId === openedItemId) {
        const editedTask = {
          ...item,
          categoryId: 0,
        };
        console.log(editedTask);
        // console.log({ ...editedTask });
        editTaskAtApi(editedTask);
        // todo типизация коллбэка map
        setTasks(tasks.map((task: { id: any; name?: any; description?: any; categoryId?: any; }) => {
          if (task.id === openedItemId) {
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
    // todo в вопрос добавлять название категории
    <ModalConfirmActionWrapper title="Удаление категории" question={`Вы уверены, что хотите удалить категорию "${categories.find((item: any) => item.id === openedItemId).name}"?`} primaryButtonClickHandler={deleteCategory} />
  );
};

export default DeleteCategory;
