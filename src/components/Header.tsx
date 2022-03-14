import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logoAndNav}>
        {/* <div className={styles.logo}>ToDo List</div> */}
        ,
        <Link className={styles.logo} to="/">ToDo List</Link>
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
      <button type="button" className={styles.btnPrimary}>Добавить задачу</button>
    </header>
  );
}
