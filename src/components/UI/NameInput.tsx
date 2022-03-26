/* eslint-disable no-lone-blocks */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import styles from './NameInput.module.css';

export default function NameInput(props: any) {
  const errorDiv = <div className={styles.errorDiv}>{props.error}</div>;

  // todo знак обязательности красным
  return (
    <div className={styles.inputWrapper}>
      <input
        type="text"
        id="name"
        placeholder={props.placeholder}
        maxLength={props.maxLength}
        className={styles.input}
        readOnly={props.readonly}
        onClick={props.onClickHandler}
        value={props.value}
        onChange={props.onChangeHandler}
        onFocus={props.isRequired && props.onFocusHandler}
      />
      { /* eslint-disable-next-line jsx-a11y/label-has-associated-control */ }
      <label htmlFor="name" className={styles.label}>{props.isRequired ? `${props.label}*` : props.label}</label>
      {props.isDirty && errorDiv}
    </div>
  );
}
