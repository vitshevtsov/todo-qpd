/* eslint-disable no-shadow */
import React, { useContext, useMemo } from 'react';
import ImgButton from './UI/ImgButton/ImgButton';
import { DataContext, ModalContext } from '../context/context';
import { ITaskItem, ICategoryItem } from '../types/data';
import styles from './TaskItem.module.css';

const folderIcon = require('../assets/iconFolderCat.png');
const editIcon = require('../assets/iconEdit.png');
const deleteIcon = require('../assets/iconDelete.png');

export default function TaskItem({
  id, name, categoryId, description,
}: ITaskItem) {
  const { openModal } = useContext(ModalContext);
  const { tasks, categories, setOpenedItemId } = useContext(DataContext);

  const onClickEditButton = (id: number) => {
    setOpenedItemId(id);
    openModal.openEditTask();
  };

  const onClickDeleteButton = (id: number) => {
    setOpenedItemId(id);
    openModal.openDeleteTask();
  };

  const getCategoryName = (id: number) => {
    if (id && (id !== 0)) {
      return categories.find((item: ICategoryItem) => item.id === id)?.name;
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
      <div className={styles.itemLeftSide}>
        <div className={styles.textHeader}>
          <div className={styles.title}>{name}</div>
          {!!(categoryId && categoryId !== 0) && categoryDiv}
        </div>
        <div className={styles.description}>{description}</div>
      </div>
      <div className={styles.itemRightSide}>
        <ImgButton
          src={editIcon}
          alt="edit icon"
          onClickHandler={() => onClickEditButton(id)}
        />
        <ImgButton
          src={deleteIcon}
          alt="delete icon"
          onClickHandler={() => onClickDeleteButton(id)}
        />
      </div>
    </div>
  );
}
