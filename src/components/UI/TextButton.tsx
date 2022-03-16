/* eslint-disable react/destructuring-assignment */
import React from 'react';
import styles from './TextButton.module.css';

export default function TextButton(props: any) {
  const primaryClassNames = [styles.btn, styles.btnPrimary].join(' ');
  return (
    <button type="button" className={props.isPrimary ? primaryClassNames : styles.btn}>{props.text}</button>
  );
}
