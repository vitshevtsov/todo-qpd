/* eslint-disable no-unused-vars */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import styles from './ImgButton.module.css';

interface IImgButtonProps {
  onClickHandler: (e: React.MouseEvent<HTMLButtonElement>) => void;
  src: string;
  alt: string;
}

export default function ImgButton(props: IImgButtonProps) {
  return (
    <button type="button" onClick={props.onClickHandler} className={styles.btn}>
      <img src={props.src} alt={props.alt} className={styles.imgBtn} />
    </button>
  );
}
