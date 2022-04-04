/* eslint-disable no-unused-vars */
/* eslint-disable react/require-default-props */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import styles from './TextArea.module.css';

interface ITextAreaProps {
  maxLength?: number;
  placeholder: string;
  value: string;
  onChangeHandler: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  label: string;
}

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
