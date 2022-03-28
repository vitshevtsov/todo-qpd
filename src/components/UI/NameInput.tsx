/* eslint-disable react/require-default-props */
/* eslint-disable no-lone-blocks */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import styles from './NameInput.module.css';

interface INameInputprops {
  error?: string;
  width: string;
  placeholder: string;
  maxLength?: number;
  readonly?: boolean;
  onClickHandler?: any;
  onChangeHandler?: any;
  onFocusHandler?: any;
  value: string;
  isRequired?: boolean;
  label: string;
  isDirty?: boolean;
}

export default function NameInput(props: INameInputprops) {
  const errorDiv = <div className={styles.errorDiv}>{props.error}</div>;
  const requiredSign = <div className={styles.requiredSign}> *</div>;

  return (
    <div className={styles.inputWrapper}>
      <input
        style={{ width: props.width }}
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
      <label htmlFor="name" className={styles.label}>
        {props.label}
        {props.isRequired && requiredSign}
      </label>
      {props.isDirty && errorDiv}
    </div>
  );
}
