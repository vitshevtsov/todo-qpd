/* eslint-disable max-len */
/* eslint-disable no-undef */
/* eslint-disable no-unused-expressions */
/* eslint-disable import/no-cycle */
/* eslint-disable import/extensions */
import React, { useContext } from 'react';
import { deleteCategoryFromApi } from '../API/api';
import { DataContext, ModalContext } from '../context/context';
import ModalConfirmAction from './modal/ModalConfirmAction';

const DeleteCategory = () => {
  const {
    categories, setCategories, openedItemId, setOpenedItemId,
  } = useContext(DataContext);
  const { closeModal } = useContext(ModalContext);

  const deleteCategory = () => {
    deleteCategoryFromApi(openedItemId);
    // todo типизация коллбэка map
    setCategories(categories.filter((item: { id: any; name?: any; description?: any;}) => item.id !== openedItemId));
    setOpenedItemId(null);
    closeModal.closeDeleteCategory();
  };

  return (
    // todo в вопрос добавлять название категории
    <ModalConfirmAction title="Удаление категории" question="Вы уверены, что хотите удалить категорию?" primaryButtonClickHandler={deleteCategory} />
  );
};

export default DeleteCategory;
