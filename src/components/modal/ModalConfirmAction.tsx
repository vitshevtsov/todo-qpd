/* eslint-disable react/require-default-props */
import React from 'react';
import ImgButton from '../ImgButton';
import TextButton from '../UI/TextButton';
import styles from './ModalConfirmAction.module.css';

const closeIcon = require('../../assets/iconClose.png');

interface IConfirmActionWrapper {
    title: string;
    question: string;
}

const ModalConfirmAction = ({ title, question }: IConfirmActionWrapper) => (
  <div className={styles.wrapper}>
    <div className={styles.closeIconWrapper}>
      <ImgButton src={closeIcon} />
    </div>
    <h1 className={styles.title}>{title}</h1>

    <p className={styles.question}>{question}</p>

    <div className={styles.rowButton}>
      <TextButton isPrimary text="Да" width="120px" />
      <TextButton text="Нет" width="120px" />
    </div>
  </div>
);

export default ModalConfirmAction;
