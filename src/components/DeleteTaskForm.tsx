/* eslint-disable import/no-cycle */
/* eslint-disable import/extensions */
import React, { useContext } from 'react';
import { deleteTaskFromApi } from '../API/api';
import { DataContext, ModalContext } from '../context/context';
import ModalConfirmActionWrapper from './modal/ModalConfirmAction/ModalConfirmActionWrapper';
import { ITaskItem } from '../types/data';

/**
 * Компонент, конфигурирующий модальное окно удаления задачи
 * возвращает обертку для модальных окон ModalConfirmActionWrapper, содержащую пропсы,
 * необходимые для удаления задачи
 */
const DeleteTask: React.FC = () => {
  const {
    tasks, setTasks, openedItemId, setOpenedItemId,
  } = useContext(DataContext);
  const { closeModal } = useContext(ModalContext);

  const deleteTask = () => {
    if (openedItemId !== null) {
      deleteTaskFromApi(openedItemId);
    }
    setTasks(tasks.filter((item: ITaskItem) => item.id !== openedItemId));
    setOpenedItemId(null);
    closeModal.closeDeleteTask();
  };

  return (
    <ModalConfirmActionWrapper
      title="Удаление задачи"
      question={`Вы уверены, что хотите удалить задачу "${tasks.find((item: ITaskItem) => item.id === openedItemId)!.name}"?`}
      primaryButtonClickHandler={deleteTask}
    />
  );
};

export default DeleteTask;
