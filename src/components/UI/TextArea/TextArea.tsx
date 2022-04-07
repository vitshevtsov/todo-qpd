/* eslint-disable no-unused-vars */
/* eslint-disable react/require-default-props */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import styles from './TextArea.module.css';
import { ITextAreaProps } from '../../../types/data';

export default function TextArea(props: ITextAreaProps) {
  return (
    <div className={styles.inputWrapper}>
      <textarea
        maxLength={props.maxLength}
        id="description"
        placeholder={props.placeholder}
        className={styles.textArea}
        value={props.value}
        onChange={props.onChangeHandler}
      />
      <label
        htmlFor="description"
        className={styles.label}
      >
        {props.label}
      </label>
    </div>
  );
}
