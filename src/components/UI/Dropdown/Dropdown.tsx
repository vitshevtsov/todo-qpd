/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, {
  useContext, useState,
} from 'react';
import NameInput from '../NameInput/NameInput';
import styles from './Dropdown.module.css';
import { DataContext } from '../../../context/DataContext/DataContext';
import { ICategoryItem, IDropdownProps } from '../../../types/data';

const dropdownArrowIcon = require('../../../assets/iconDropdownArrow.png');
const dropdownClearIcon = require('../../../assets/iconClose.png');

const Dropdown = ({
  setValue, value, width, placeholder, label,
}: IDropdownProps) => {
  const { categories } = useContext(DataContext);
  const [isOpened, setIsOpened] = useState(false);

  const toggleItems = () => {
    setIsOpened(!isOpened);
  };

  const onClickItemHandler = (e: React.MouseEvent<HTMLLIElement>) => {
    setValue({ name: e.currentTarget.innerHTML, id: +e.currentTarget.id });
    setIsOpened(!isOpened);
  };

  const clearValueHandler = () => {
    setValue({ name: '', id: 0 });
    setIsOpened(false);
  };

  const dropdownItems = (
    <ul className={styles.dropdownItems}>
      {categories.map((item: ICategoryItem) => <li key={item.id} id={`${item.id}`} onClick={onClickItemHandler}>{item.name}</li>)}
    </ul>
  );

  const dropdownIcon = value
    ? <img className={styles.closeIcon} src={dropdownClearIcon} alt="dropdown clear icon" onClick={clearValueHandler} />
    : <img className={styles.arrowIcon} src={dropdownArrowIcon} alt="dropdown arrow icon" />;

  return (
    <div className={styles.dropdownWrapper}>
      <NameInput
        width={width}
        placeholder={placeholder}
        label={label}
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

export default Dropdown;
