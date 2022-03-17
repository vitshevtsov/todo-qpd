/* eslint-disable react/require-default-props */
import React from 'react';
import ImgButton from '../ImgButton';
import TextButton from '../UI/TextButton';
import styles from './ModalChangeDataWrapper.module.css';

const closeIcon = require('../../assets/iconClose.png');

interface IWrapper {
    title: string;
    children?: React.ReactChild | React.ReactNode;
    primaryButtonText: string;
}

const ModalChangeDataWrapper = ({ title, children, primaryButtonText }: IWrapper) => (
  <div className={styles.wrapper}>
    <div className={styles.closeIconWrapper}>
      <ImgButton src={closeIcon} />
    </div>
    <h1 className={styles.title}>{title}</h1>

    {children}

    <div className={styles.rowButton}>
      <TextButton isPrimary text={primaryButtonText} width="200px" />
      <TextButton text="Закрыть" width="120px" />
    </div>
  </div>
);

export default ModalChangeDataWrapper;
