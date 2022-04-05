import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { ModalContext, DataContext } from '../context/context';
import TextButton from './UI/TextButton/TextButton';

const HeaderButton = () => {
  const location = useLocation();
  const isCategoriesPage = (location.pathname === '/categories');
  const { openModal } = useContext(ModalContext);
  const { setOpenedItemId } = useContext(DataContext);

  const onClickAddTaskButton = () => {
    if (isCategoriesPage) {
      setOpenedItemId(0);
      openModal.openAddCategory();
      return;
    }
    setOpenedItemId(0);
    openModal.openAddTask();
  };

  return (
    (isCategoriesPage)
      ? <TextButton width="216px" isPrimary text="Добавить категорию" onClickHandler={onClickAddTaskButton} />
      : <TextButton width="176px" isPrimary text="Добавить задачу" onClickHandler={onClickAddTaskButton} />
  );
};

export default HeaderButton;
