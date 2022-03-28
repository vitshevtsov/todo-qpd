/* eslint-disable no-unused-vars */
/* eslint-disable react/require-default-props */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import styles from './TextButton.module.css';

interface ITextButtonProps {
  width: string;
  isPrimary?: boolean;
  text: string;
  onClickHandler?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function TextButton({
  width, isPrimary, text, onClickHandler,
}: ITextButtonProps) {
  const primaryClassNames = [styles.btn, styles.btnPrimary].join(' ');
  return (
    <button type="button" style={{ width }} className={isPrimary ? primaryClassNames : styles.btn} onClick={onClickHandler}>{text}</button>
  );
}
