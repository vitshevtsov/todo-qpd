/* eslint-disable no-shadow */
import React, { useContext } from 'react';
import ImgButton from './UI/ImgButton/ImgButton';
import { DataContext, ModalContext } from '../context/context';
import { ICategoryItem } from '../types/data';
import styles from './CategoryItem.module.css';

const editIcon = require('../assets/iconEdit.png');
const deleteIcon = require('../assets/iconDelete.png');

export default function CategoryItem({
  id, name, description,
}: ICategoryItem) {
  const { openModal } = useContext(ModalContext);
  const { setOpenedItemId } = useContext(DataContext);

  const onClickEditButton = (id: number) => {
    setOpenedItemId(id);
    openModal.openEditCategory();
  };

  const onClickDeleteButton = (id: number) => {
    setOpenedItemId(id);
    openModal.openDeleteCategory();
  };

  return (
    <div className={styles.listItem}>
      <div className={styles.itemLeftSide}>
        <div className={styles.textHeader}>
          <div className={styles.title}>{name}</div>
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
