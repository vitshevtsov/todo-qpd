import React from 'react';
import ModalConfirmAction from './modal/ModalConfirmAction';

const DeleteTask = () => (
  // todo в вопрос добавлять название задачи
  <ModalConfirmAction title="Удаление задачи" question="Вы уверены, что хотите удалить задачу?" />
);

export default DeleteTask;
