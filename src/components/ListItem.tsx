/* eslint-disable no-shadow */
import React, { useContext, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import ImgButton from './ImgButton';
import { DataContext, ModalContext } from '../context/context';
import IListItem from '../types/data';
import styles from './ListItem.module.css';

const folderIcon = require('../assets/iconFolderCat.png');
const editIcon = require('../assets/iconEdit.png');
const deleteIcon = require('../assets/iconDelete.png');

export default function ListItem({
  id, name, categoryId, description,
}: IListItem) {
  const location = useLocation();
  const isCategoriesPage = (location.pathname === '/categories');
  const { openModal } = useContext(ModalContext);
  const { tasks, categories, setOpenedItemId } = useContext(DataContext);

  const onClickEditButton = (id: number) => {
    setOpenedItemId(id);
    if (isCategoriesPage) {
      openModal.openEditCategory();
      return;
    }
    openModal.openEditTask();
  };

  const onClickDeleteButton = (id: number) => {
    setOpenedItemId(id);
    if (isCategoriesPage) {
      openModal.openDeleteCategory();
      return;
    }
    openModal.openDeleteTask();
  };

  const getCategoryName = (id: number | undefined) => {
    if (id && (id !== 0)) {
      return categories.find((item: IListItem) => item.id === id)?.name;
    }
    return '';
  };
  const memoizedCategoryName = useMemo(() => getCategoryName(categoryId), [tasks, categories]);
  const categoryDiv = (
    <div className={styles.category}>
      <img src={folderIcon} alt="folder icon" className={styles.categoryImg} />
      {!!(categoryId && categories) && memoizedCategoryName}
    </div>
  );

  return (
    <div className={styles.listItem}>
      <div>
        <div className={styles.textHeader}>
          <div className={styles.title}>{name}</div>
          {!!(categoryId && categoryId !== 0) && categoryDiv}
        </div>
        <div className={styles.description}>{description}</div>
      </div>
      <div className={styles.itemBtns}>
        <ImgButton src={editIcon} onClickHandler={() => onClickEditButton(id)} />
        <ImgButton src={deleteIcon} onClickHandler={() => onClickDeleteButton(id)} />
      </div>
    </div>
  );
}
