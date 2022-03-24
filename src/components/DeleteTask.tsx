/* eslint-disable max-len */
/* eslint-disable no-undef */
/* eslint-disable no-unused-expressions */
/* eslint-disable import/no-cycle */
/* eslint-disable import/extensions */
import React, { useContext } from 'react';
import { deleteTaskFromApi } from '../API/api';
import { DataContext, ModalContext } from '../context/context';
import ModalConfirmAction from './modal/ModalConfirmAction';

const DeleteTask = () => {
  const {
    tasks, setTasks, openedItemId, setOpenedItemId,
  } = useContext(DataContext);
  const { closeModal } = useContext(ModalContext);
  const deleteTask = () => {
    deleteTaskFromApi(openedItemId);
    // todo типизация коллбэка map
    setTasks(tasks.filter((item: { id: any; name?: any; description?: any; categoryId?: any; }) => item.id !== openedItemId));
    setOpenedItemId(null);
    closeModal.closeDeleteTask();
  };

  return (
    // todo в вопрос добавлять название задачи
    <ModalConfirmAction title="Удаление задачи" question={`Вы уверены, что хотите удалить задачу "${tasks.find((item: any) => item.id === openedItemId).name}"?`} primaryButtonClickHandler={deleteTask} />
  );
};

export default DeleteTask;
