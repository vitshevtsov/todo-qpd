/* eslint-disable import/no-cycle */
/* eslint-disable import/extensions */
import React, { useContext } from 'react';
import { DataContext, ModalContext, ServiceContext } from '../context/context';
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
  const { taskService } = useContext(ServiceContext);

  /**
 * Функция удаляет задачу в api,
 * и сохраняет изменения в state в случае получения ответа сервера
 */
  const deleteTask = async () => {
    if (openedItemId !== null) {
      const response = await taskService.deleteTask(openedItemId);
      if (response) {
        closeModal.closeDeleteTask();
        setTasks(tasks.filter((item: ITaskItem) => item.id !== openedItemId));
        setOpenedItemId(null);
      } else {
        alert('Произошла ошибка. Попробуйте позднее');
      }
    }
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
