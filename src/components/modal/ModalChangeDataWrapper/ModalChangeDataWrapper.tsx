/* eslint-disable default-case */
import React, { useEffect, useMemo } from 'react';
import { createPortal } from 'react-dom';
import ImgButton from '../../UI/ImgButton/ImgButton';
import TextButton from '../../UI/TextButton/TextButton';
import styles from './ModalChangeDataWrapper.module.css';
import { IChangeDataWrapper as IWrapper } from '../../../types/data';

const closeIcon = require('../../../assets/iconClose.png');

const modalRootEl = document.querySelector('#modal');

/**
 * Компонент-обертка для модальных окон, при монтировании создает портал
 *  в div #modal вне app, при размонтировании - удаляет.
 */
const ModalChangeDataWrapper = ({
  title, children, primaryButtonText, primaryButtonClickHandler, onClickCloseButton,
  primaryButtonWidth, closeButtonText, closeButtonWidth,
}: IWrapper) => {
  const el: HTMLDivElement = useMemo(() => document.createElement('div'), []);
  useEffect(() => {
    // '!.' - non-null assertion. Info:  https://stackoverflow.com/questions/40349987/how-to-suppress-error-ts2533-object-is-possibly-null-or-undefined
    modalRootEl!.appendChild(el);
    return () => {
      modalRootEl!.removeChild(el);
    };
  }, []);

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
            <TextButton
              isPrimary
              text={primaryButtonText}
              width={primaryButtonWidth}
              onClickHandler={primaryButtonClickHandler}
            />
            <TextButton
              text={closeButtonText}
              width={closeButtonWidth}
              onClickHandler={onClickCloseButton}
            />
          </div>
        </form>
      </div>
    ), el,
  );
};

export default ModalChangeDataWrapper;
