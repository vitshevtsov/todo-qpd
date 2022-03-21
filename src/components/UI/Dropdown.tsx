/* eslint-disable max-len */
/* eslint-disable import/no-named-as-default */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable no-lone-blocks */
import React, { useContext, useState } from 'react';
import NameInput from './NameInput';
import styles from './Dropdown.module.css';
import { DataContext } from '../../context/DataContext/DataContext';

const dropdownArrowIcon = require('../../assets/iconDropdownArrow.png');
const dropdownClearIcon = require('../../assets/iconClose.png');

const Dropdown: React.FC = () => {
  const { categories } = useContext(DataContext);
  const [isOpened, setIsOpened] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const toggleItems = () => {
    setIsOpened(!isOpened);
  };

  const onClickItemHandler = (e: any) => {
    setInputValue(e.target.innerHTML);
    setIsOpened(!isOpened);
  };

  const clearValueHandler = () => {
    setInputValue('');
    setIsOpened(false);
  };

  const dropdownItems = (
    <ul className={styles.dropdownItems}>
      {categories.map((item: any) => <li key={item.id} onClick={onClickItemHandler}>{item.name}</li>)}
    </ul>
  );

  const dropdownIcon = inputValue
    ? <img className={styles.closeIcon} src={dropdownClearIcon} alt="dropdown clear icon" onClick={clearValueHandler} />
    : <img className={styles.arrowIcon} src={dropdownArrowIcon} alt="dropdown arrow icon" />;

  return (
    <div className={styles.dropdownWrapper}>
      <NameInput
        placeholder="Выберите категорию"
        label="Категория"
        readonly
        onClickHandler={toggleItems}
        value={inputValue}
      />
      {dropdownIcon}
      <div className="dropdownToggle" />
      {isOpened && dropdownItems}
    </div>
  );
};

export default Dropdown;
