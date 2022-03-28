/* eslint-disable default-case */
import React, { useContext, useEffect, useMemo } from 'react';
import { createPortal } from 'react-dom';
import { DataContext, ModalContext } from '../../context/context';
import ImgButton from '../UI/ImgButton';
import TextButton from '../UI/TextButton';
import styles from './ModalConfirmActionWrapper.module.css';

interface IConfirmActionWrapper {
  title: string;
  question: string;
  primaryButtonClickHandler: () => void;
}

const closeIcon = require('../../assets/iconClose.png');

const modalRootEl = document.querySelector('#modal');

/**
 * Компонент-обертка для модальных окон, при монтировании создает портал
 *  в div #modal вне app, при размонтировании - удаляет.
 */
const ModalConfirmAction = ({ title, question, primaryButtonClickHandler }: IConfirmActionWrapper) => {
  const el: HTMLDivElement = useMemo(() => document.createElement('div'), []);
  useEffect(() => {
    // '!.' - non-null assertion. Info:  https://stackoverflow.com/questions/40349987/how-to-suppress-error-ts2533-object-is-possibly-null-or-undefined
    modalRootEl!.appendChild(el);
    return () => {
      modalRootEl!.removeChild(el);
    };
  }, []);

  const { closeModal } = useContext(ModalContext);
  const { setOpenedItemId } = useContext(DataContext);
  const onClickCloseButton = () => {
    setOpenedItemId(null);
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
            <ImgButton
              src={closeIcon}
              alt="close icon"
              onClickHandler={onClickCloseButton}
            />
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
