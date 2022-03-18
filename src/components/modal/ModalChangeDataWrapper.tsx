/* eslint-disable max-len */
/* eslint-disable react/require-default-props */
import React, { useContext, useEffect, useMemo } from 'react';
import { createPortal } from 'react-dom';
import { ModalContext } from '../../context/context';
import ImgButton from '../ImgButton';
import TextButton from '../UI/TextButton';
import styles from './ModalChangeDataWrapper.module.css';

const closeIcon = require('../../assets/iconClose.png');

const modalRootEl = document.querySelector('#modal');
interface IWrapper {
    title: string;
    children?: React.ReactChild | React.ReactNode;
    primaryButtonText: string;
}

const ModalChangeDataWrapper = ({ title, children, primaryButtonText }: IWrapper) => {
  const el: HTMLDivElement = useMemo(() => document.createElement('div'), []);
  useEffect(() => {
    modalRootEl!.appendChild(el); // '!.' - non-null assertion. Info:  https://stackoverflow.com/questions/40349987/how-to-suppress-error-ts2533-object-is-possibly-null-or-undefined
    return () => {
      modalRootEl!.removeChild(el);
    };
  });

  const { closeModal } = useContext(ModalContext);
  const onClickCloseButton = () => {
    closeModal();
  };

  // if (isOpen) return portal else return null - нужно проверять в контексте, открыта ли модалка (boolean)
  return createPortal(
    (
      <div className={styles.background}>
        <div className={styles.wrapperContent}>
          <div className={styles.closeIconWrapper}>
            <ImgButton src={closeIcon} />
          </div>
          <h1 className={styles.title}>{title}</h1>

          {children}

          <div className={styles.rowButton}>
            <TextButton isPrimary text={primaryButtonText} width="200px" />
            <TextButton text="Закрыть" width="120px" onClickHandler={onClickCloseButton} />
          </div>
        </div>
      </div>
    ), el,
  );
};

export default ModalChangeDataWrapper;
