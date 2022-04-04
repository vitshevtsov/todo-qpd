/* eslint-disable default-case */
import React, { useContext, useEffect, useMemo } from 'react';
import { createPortal } from 'react-dom';
import { DataContext, ModalContext } from '../../context/context';
import ImgButton from '../UI/ImgButton/ImgButton';
import TextButton from '../UI/TextButton/TextButton';
import styles from './ModalChangeDataWrapper.module.css';

interface IWrapper {
  title: string;
  children?: React.ReactChild | React.ReactNode;
  primaryButtonText: string;
  primaryButtonClickHandler: () => void;
}

const closeIcon = require('../../assets/iconClose.png');

const modalRootEl = document.querySelector('#modal');

/**
 * Компонент-обертка для модальных окон, при монтировании создает портал
 *  в div #modal вне app, при размонтировании - удаляет.
 */
const ModalChangeDataWrapper = ({
  title, children, primaryButtonText, primaryButtonClickHandler,
}: IWrapper) => {
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
      case 'Создание задачи': closeModal.closeAddTask();
        break;
      case 'Создание категории': closeModal.closeAddCategory();
        break;
      case 'Редактирование задачи': closeModal.closeEditTask();
        break;
      case 'Редактирование категории': closeModal.closeEditCategory();
        break;
    }
  };

  return createPortal(
    (
      <div className={styles.background}>
        <form className={styles.wrapperContent}>
          <div className={styles.closeIconWrapper}>
            <ImgButton
              src={closeIcon}
              alt="close icon"
              onClickHandler={onClickCloseButton}
            />
          </div>
          <h1 className={styles.title}>{title}</h1>

          {children}

          <div className={styles.rowButton}>
            <TextButton isPrimary text={primaryButtonText} width="200px" onClickHandler={primaryButtonClickHandler} />
            <TextButton text="Закрыть" width="120px" onClickHandler={onClickCloseButton} />
          </div>
        </form>
      </div>
    ), el,
  );
};

export default ModalChangeDataWrapper;
