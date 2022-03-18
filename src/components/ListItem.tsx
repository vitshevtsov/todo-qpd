import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import ImgButton from './ImgButton';
import { ModalContext } from '../context/context';
import styles from './ListItem.module.css';

const folderIcon = require('../assets/iconFolderCat.png');
const editIcon = require('../assets/iconEdit.png');
const deleteIcon = require('../assets/iconDelete.png');

// todo убрать ошибку ниже
// eslint-disable-next-line react/prop-types
export default function ListItem({ title = '', category = '', description = '' }) {
  const location = useLocation();
  const isCategoriesPage = (location.pathname === '/categories');
  const { openModal } = useContext(ModalContext);
  const onClickEditTaskButton = () => {
    if (isCategoriesPage) {
      openModal.openEditCategory();
      return;
    }
    openModal.openEditTask();
  };

  return (
    <div className={styles.listItem}>
      <div>
        <div className={styles.textHeader}>
          <div className={styles.title}>{title}</div>
          <a href="/" className={styles.category}>
            <img src={folderIcon} alt="folder icon" className={styles.categoryImg} />
            {category}
          </a>
        </div>
        <div className="description">{description}</div>

      </div>
      <div className={styles.itemBtns}>
        <ImgButton src={editIcon} onClickHandler={onClickEditTaskButton} />
        <ImgButton src={deleteIcon} />
      </div>
    </div>
  );
}
