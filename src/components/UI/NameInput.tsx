/* eslint-disable no-lone-blocks */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import styles from './NameInput.module.css';

export default function NameInput(props: any) {
// todo знак обязательности красным
  return (
    <div className={styles.inputWrapper}>
      <input
        type="text"
        id="name"
        placeholder={props.placeholder}
        maxLength={255}
        className={styles.input}
        readOnly={props.readonly}
        onClick={props.onClickHandler}
      />
      { /* eslint-disable-next-line jsx-a11y/label-has-associated-control */ }
      <label htmlFor="name" className={styles.label}>{props.isRequired ? `${props.label}*` : props.label}</label>
    </div>
  );
}
