/* eslint-disable no-lone-blocks */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import styles from './TextArea.module.css';

export default function TextArea(props: any) {
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
      { /* eslint-disable-next-line jsx-a11y/label-has-associated-control */ }
      <label
        htmlFor="description"
        className={styles.label}
      >

        {props.isRequired ? `${props.label}*` : props.label}

      </label>
    </div>
  );
}
