import React from 'react'
import styles from './Header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
        <div className={styles.logoAndNav}>
          <div className={styles.logo}>ToDo List</div>
          <a href="">Задачи</a>
          <div className={styles.divider}>|</div>
          <a href="">Категории</a>
        </div>
        <button className={styles.btnPrimary}>Добавить задачу</button>
      </header>
  )
}
