import React from 'react';
import ModalConfirmAction from './modal/ModalConfirmAction';

const DeleteCategory = () => (
  // todo в вопрос добавлять название категории
  <ModalConfirmAction title="Удаление категории" question="Вы уверены, что хотите удалить категорию?" />
);

export default DeleteCategory;
