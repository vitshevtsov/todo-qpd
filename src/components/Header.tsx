/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { ModalContext } from '../context/context';
import styles from './Header.module.css';
import TextButton from './UI/TextButton';

const Header: React.FC = () => {
  const location = useLocation();
  const isCategoriesPage = (location.pathname === '/categories');
  const { openModal } = useContext(ModalContext);
  const onClickAddTaskButton = () => {
    openModal();
  };

  let addItemButton;
  if (isCategoriesPage) {
    addItemButton = <TextButton width="216px" isPrimary text="Добавить категорию" />;
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
          Tasks
        </NavLink>
        <div className={styles.divider} />
        <NavLink
          style={({ isActive }) => ({
            color: isActive ? '#8FB6FF' : '',
          })}
          to="/categories"
          className={styles.headerLink}
        >
          Categories
        </NavLink>
      </div>

      {addItemButton}

    </header>
  );
};

export default Header;
