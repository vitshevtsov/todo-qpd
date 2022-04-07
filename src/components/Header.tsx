/* eslint-disable import/extensions */
import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

const Header: React.FC = ({ children }) => (
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
    {children}
  </header>
);

export default Header;
