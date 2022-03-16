import React from 'react';
import styles from './NameInput.module.css';

export default function NameInput() {
  return (
    <div className={styles.inputWrapper}>
      <input type="text" id="name" placeholder="Введите имя задачи" className={styles.input} />
      { /* eslint-disable-next-line jsx-a11y/label-has-associated-control */ }
      <label htmlFor="name" className={styles.label}>
        Имя
        <span className={styles.labelRequiredSign}>*</span>
      </label>
      {/* <select name="" id=""></select> */}
    </div>
  );
}
