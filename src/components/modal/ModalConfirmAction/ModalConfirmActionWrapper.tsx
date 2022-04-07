/* eslint-disable default-case */
import React, { useEffect, useMemo } from 'react';
import { createPortal } from 'react-dom';
import ImgButton from '../../UI/ImgButton/ImgButton';
import TextButton from '../../UI/TextButton/TextButton';
import styles from './ModalConfirmActionWrapper.module.css';
import { IConfirmActionWrapper } from '../../../types/data';

const closeIcon = require('../../../assets/iconClose.png');

const modalRootEl = document.querySelector('#modal');

/**
 * Компонент-обертка для модальных окон, при монтировании создает портал
 *  в div #modal вне app, при размонтировании - удаляет.
 */
const ModalConfirmAction = ({
  title, question, primaryButtonClickHandler, onClickCloseButton,
  primaryButtonText, primaryButtonWidth, closeButtonText, closeButtonWidth,
}: IConfirmActionWrapper) => {
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
            <TextButton
              isPrimary
              text={primaryButtonText}
              width={primaryButtonWidth}
              onClickHandler={primaryButtonClickHandler}
            />
            <TextButton text={closeButtonText} width={closeButtonWidth} onClickHandler={onClickCloseButton} />
          </div>
        </div>
      </div>

    ), el,
  );
};

export default ModalConfirmAction;
