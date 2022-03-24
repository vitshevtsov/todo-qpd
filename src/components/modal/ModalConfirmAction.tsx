/* eslint-disable max-len */
/* eslint-disable default-case */
/* eslint-disable react/require-default-props */
import React, { useContext, useEffect, useMemo } from 'react';
import { createPortal } from 'react-dom';
import { ModalContext } from '../../context/context';
import ImgButton from '../ImgButton';
import TextButton from '../UI/TextButton';
import styles from './ModalConfirmAction.module.css';

const closeIcon = require('../../assets/iconClose.png');

const modalRootEl = document.querySelector('#modal');
interface IConfirmActionWrapper {
    title: string;
    question: string;
    // todo сделать колбэк ниже обязательным после доработки удаления категорий
    primaryButtonClickHandler?: () => void;
}
// todo Объединить 2 вида модалок в одну обертку (?)
const ModalConfirmAction = ({ title, question, primaryButtonClickHandler }: IConfirmActionWrapper) => {
  const el: HTMLDivElement = useMemo(() => document.createElement('div'), []);
  useEffect(() => {
    modalRootEl!.appendChild(el); // '!.' - non-null assertion. Info:  https://stackoverflow.com/questions/40349987/how-to-suppress-error-ts2533-object-is-possibly-null-or-undefined
    return () => {
      modalRootEl!.removeChild(el);
    };
  });

  const { closeModal } = useContext(ModalContext);
  const onClickCloseButton = () => {
    switch (title) {
      case 'Удаление задачи': closeModal.closeDeleteTask();
        break;
      case 'Удаление категории': closeModal.closeDeleteCategory();
        break;
    }
  };

  return createPortal(
    (
      <div className={styles.background}>
        <div className={styles.wrapperContent}>
          <div className={styles.closeIconWrapper}>
            <ImgButton src={closeIcon} onClickHandler={onClickCloseButton} />
          </div>
          <h1 className={styles.title}>{title}</h1>

          <p className={styles.question}>{question}</p>

          <div className={styles.rowButton}>
            <TextButton isPrimary text="Да" width="120px" onClickHandler={primaryButtonClickHandler} />
            <TextButton text="Нет" width="120px" onClickHandler={onClickCloseButton} />
          </div>
        </div>
      </div>

    ), el,
  );
};

export default ModalConfirmAction;
