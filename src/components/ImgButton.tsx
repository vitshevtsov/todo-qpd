/* eslint-disable react/destructuring-assignment */
import React from 'react';
import styles from './ImgButton.module.css';

export default function ImgButton(props: any) {
  return (
    <button type="button" onClick={props.onClickHandler} className={styles.btn}>
      <img src={props.src} alt={props.alt} className={styles.imgBtn} />
    </button>
  );
}
