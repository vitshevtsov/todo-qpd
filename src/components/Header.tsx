/* eslint-disable import/extensions */
import React, { useContext } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { DataContext, ModalContext } from '../context/context';
import styles from './Header.module.css';
import TextButton from './UI/TextButton/TextButton';

const Header: React.FC = () => {
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

  let addItemButton;
  if (isCategoriesPage) {
    addItemButton = <TextButton width="216px" isPrimary text="Добавить категорию" onClickHandler={onClickAddTaskButton} />;
  } else {
    addItemButton = <TextButton width="176px" isPrimary text="Добавить задачу" onClickHandler={onClickAddTaskButton} />;
  }

  return (
    <header className={styles.header}>
      <div className={styles.logoAndNav}>
        <NavLink className={styles.logo} to="/tasks">ToDo List</NavLink>
        <NavLink
          style={({ isActive }) => ({
            color: isActive ? '#8FB6FF' : '',
          })}
          to="/tasks"
          className={styles.headerLink}
        >
          Задачи
        </NavLink>
        <div className={styles.divider} />
        <NavLink
          style={({ isActive }) => ({
            color: isActive ? '#8FB6FF' : '',
          })}
          to="/categories"
          className={styles.headerLink}
        >
          Категории
        </NavLink>
      </div>

      {addItemButton}

    </header>
  );
};

export default Header;
