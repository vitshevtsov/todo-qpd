import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import styles from './Header.module.css';
import TextButton from './UI/TextButton';

export default function Header() {
  const location = useLocation();
  const isCategoriesPage = (location.pathname === '/categories');
  let addItemButton;
  // todo ширина кнопок
  if (isCategoriesPage) {
    addItemButton = <TextButton isPrimary text="Добавить категорию" />;
  } else {
    addItemButton = <TextButton isPrimary text="Добавить задачу" />;
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
}
