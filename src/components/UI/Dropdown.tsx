/* eslint-disable react/destructuring-assignment */
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

const Dropdown = (props: any) => {
  const { categories } = useContext(DataContext);
  const [isOpened, setIsOpened] = useState(false);

  const toggleItems = () => {
    setIsOpened(!isOpened);
  };

  const onClickItemHandler = (e: any) => {
    props.setValue({ name: e.target.innerHTML, id: +e.target.id }); /** категория рендерится в списке задач, только если type id - number */
    setIsOpened(!isOpened);
  };

  const clearValueHandler = () => {
    props.setValue({ name: '', id: '' });
    setIsOpened(false);
  };

  const dropdownItems = (
    <ul className={styles.dropdownItems}>
      {categories.map((item: any) => <li key={item.id} id={item.id} onClick={onClickItemHandler}>{item.name}</li>)}
    </ul>
  );

  const dropdownIcon = props.value
    ? <img className={styles.closeIcon} src={dropdownClearIcon} alt="dropdown clear icon" onClick={clearValueHandler} />
    : <img className={styles.arrowIcon} src={dropdownArrowIcon} alt="dropdown arrow icon" />;

  return (
    <div className={styles.dropdownWrapper}>
      <NameInput
        placeholder="Выберите категорию"
        label="Категория"
        readonly
        onClickHandler={toggleItems}
        value={props.value}
      />
      {dropdownIcon}
      <div className="dropdownToggle" />
      {isOpened && dropdownItems}
    </div>
  );
};
// todo click outside

export default Dropdown;
