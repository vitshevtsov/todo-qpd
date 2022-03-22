/* eslint-disable no-shadow */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable consistent-return */
/* eslint-disable import/extensions */
import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import ImgButton from './ImgButton';
import { DataContext, ModalContext } from '../context/context';

import styles from './ListItem.module.css';

const folderIcon = require('../assets/iconFolderCat.png');
const editIcon = require('../assets/iconEdit.png');
const deleteIcon = require('../assets/iconDelete.png');

interface IDataContext {
  tasks: any[],
  categories: any[],
}

interface IListItemProps {
  id: number,
  title: string,
  category: number | '',
  description: string,
}
// todo убрать ошибку ниже
// eslint-disable-next-line react/prop-types
export default function ListItem({
  id, title, category = '', description,
}: IListItemProps) {
  const location = useLocation();
  const isCategoriesPage = (location.pathname === '/categories');
  const { openModal } = useContext(ModalContext);
  const { categories }:IDataContext = useContext(DataContext);

  const onClickEditButton = (id: number) => {
    if (isCategoriesPage) {
      console.log(id);

      // console.log(e.target.closest(styles.title));
      openModal.openEditCategory();
      return;
    }
    console.log(id);
    openModal.openEditTask();
  };

  const onClickDeleteButton = (id: number) => {
    if (isCategoriesPage) {
      openModal.openDeleteCategory();
      console.log(id);
      return;
    }
    openModal.openDeleteTask();
    console.log(id);
  };

  const getCategoryName = (id: number) => categories[id - 1]?.name;

  const categoryDiv = (
    <div className={styles.category}>
      <img src={folderIcon} alt="folder icon" className={styles.categoryImg} />
      {typeof category === 'number' ? getCategoryName(category) : ''}
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
        <ImgButton src={editIcon} onClickHandler={() => onClickEditButton(id)} />
        <ImgButton src={deleteIcon} onClickHandler={onClickDeleteButton} />
      </div>
    </div>
  );
}
