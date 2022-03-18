import React from 'react';
import ImgButton from './ImgButton';
import styles from './ListItem.module.css';

const folderIcon = require('../assets/iconFolderCat.png');
const editIcon = require('../assets/iconEdit.png');
const deleteIcon = require('../assets/iconDelete.png');

// todo убрать ошибку ниже
// eslint-disable-next-line react/prop-types
export default function ListItem({ title = '', category = '', description = '' }) {
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
        <ImgButton src={editIcon} />
        <ImgButton src={deleteIcon} />
      </div>
    </div>
  );
}
