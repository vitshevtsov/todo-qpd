/* eslint-disable no-lone-blocks */
import React, { useState } from 'react';
import NameInput from './NameInput';
import styles from './Dropdown.module.css';
import { categories } from '../../routes/Categories';

const dropdownArrowIcon = require('../../assets/iconDropdownArrow.png');

const dropdownItems = (
  <ul className={styles.dropdownItems}>
    {categories.map((item) => <li key={item.id}>{item.name}</li>)}
  </ul>
);
const Dropdown: React.FC = () => {
  const [isOpened, setIsOpened] = useState(false);
  const toggleItems = () => {
    setIsOpened(!isOpened);
  };

  return (
    <div className={styles.dropdownWrapper}>
      <NameInput
        placeholder="Выберите категорию"
        label="Категория"
        readonly
        onClickHandler={toggleItems}
      />
      <img className={styles.arrowIcon} src={dropdownArrowIcon} alt="dropdown arrow icon" />
      <div className="dropdownToggle" />
      {isOpened && dropdownItems}
    </div>
  );
};

export default Dropdown;
