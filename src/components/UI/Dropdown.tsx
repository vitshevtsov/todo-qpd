/* eslint-disable react/destructuring-assignment */
/* eslint-disable max-len */
/* eslint-disable import/no-named-as-default */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable no-lone-blocks */
import React, {
  Dispatch, SetStateAction, useContext, useState,
} from 'react';
import NameInput from './NameInput';
import styles from './Dropdown.module.css';
import { DataContext } from '../../context/DataContext/DataContext';
import IListItem from '../../types/data';

const dropdownArrowIcon = require('../../assets/iconDropdownArrow.png');
const dropdownClearIcon = require('../../assets/iconClose.png');

interface IDropdownProps {
  setValue: Dispatch<SetStateAction<{ name: string; id: number; }>>;
  value: string;
  width: string;
}

const Dropdown = ({ setValue, value, width }: IDropdownProps) => {
  const { categories } = useContext(DataContext);
  const [isOpened, setIsOpened] = useState(false);

  const toggleItems = () => {
    setIsOpened(!isOpened);
  };

  // типизация события e: React.MouseEvent<HTMLLIElement> не работает, ругается на наличие innerHTML и id
  const onClickItemHandler = (e: any) => {
    setValue({ name: e.target.innerHTML, id: +e.target.id });
    setIsOpened(!isOpened);
  };

  const clearValueHandler = () => {
    setValue({ name: '', id: 0 });
    setIsOpened(false);
  };

  const dropdownItems = (
    <ul className={styles.dropdownItems}>
      {categories.map((item: IListItem) => <li key={item.id} id={`${item.id}`} onClick={onClickItemHandler}>{item.name}</li>)}
    </ul>
  );

  const dropdownIcon = value
    ? <img className={styles.closeIcon} src={dropdownClearIcon} alt="dropdown clear icon" onClick={clearValueHandler} />
    : <img className={styles.arrowIcon} src={dropdownArrowIcon} alt="dropdown arrow icon" />;

  return (
    <div className={styles.dropdownWrapper}>
      <NameInput
        width={width}
        placeholder="Выберите категорию"
        label="Категория"
        readonly
        onClickHandler={toggleItems}
        value={value}
      />
      {dropdownIcon}
      <div className="dropdownToggle" />
      {isOpened && dropdownItems}
    </div>
  );
};
// todo click outside

export default Dropdown;
