import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import styles from './Header.module.css';

export default function Header() {
  const location = useLocation();
  const isCategoriesPage = (location.pathname === '/categories');
  let addItemButton;
  if (isCategoriesPage) {
    addItemButton = <button type="button" className={styles.btnPrimary}>Добавить категорию</button>;
  } else {
    addItemButton = <button type="button" className={styles.btnPrimary}>Добавить задачу</button>;
  }
  return (
    <header className={styles.header}>
      <div className={styles.logoAndNav}>
        {/* <div className={styles.logo}>ToDo List</div> */}
        ,
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
        <div className={styles.divider}>|</div>
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
