/* eslint-disable no-unused-vars */
/* eslint-disable react/require-default-props */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import styles from './NameInput.module.css';

interface INameInputProps {
  error?: string;
  width: string;
  placeholder: string;
  maxLength?: number;
  readonly?: boolean;
  onClickHandler?: (e: React.MouseEvent<HTMLInputElement>) => void;
  onChangeHandler?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocusHandler?: any; // не могу прописать тип из-за условной отрисовки (стр. 40 ниже)
  value: string;
  isRequired?: boolean;
  label: string;
  isDirty?: boolean;
}

export default function NameInput(props: INameInputProps) {
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
