/* eslint-disable import/extensions */
import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import ImgButton from './ImgButton';
import { DataContext, ModalContext } from '../context/context';

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
  const { categories } = useContext(DataContext);

  console.log(typeof category);
  console.log(categories);
  const categoryName = category ? 'est' : null;

  const onClickEditButton = () => {
    if (isCategoriesPage) {
      openModal.openEditCategory();
      return;
    }
    openModal.openEditTask();
  };

  const onClickDeleteButton = () => {
    if (isCategoriesPage) {
      openModal.openDeleteCategory();
      return;
    }
    openModal.openDeleteTask();
  };

  const categoryDiv = (
    <div className={styles.category}>
      <img src={folderIcon} alt="folder icon" className={styles.categoryImg} />
      {typeof category === 'number' ? categoryName : ''}
    </div>
  );

  return (
    <div className={styles.listItem}>
      <div>
        <div className={styles.textHeader}>
          <div className={styles.title}>{title}</div>
          {category && categoryDiv}
        </div>
        <div className="description">{description}</div>
      </div>
      <div className={styles.itemBtns}>
        <ImgButton src={editIcon} onClickHandler={onClickEditButton} />
        <ImgButton src={deleteIcon} onClickHandler={onClickDeleteButton} />
      </div>
    </div>
  );
}
