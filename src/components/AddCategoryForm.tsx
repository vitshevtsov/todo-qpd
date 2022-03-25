/* eslint-disable no-unused-vars */
/* eslint-disable import/no-cycle */
/* eslint-disable import/extensions */
import React, { useContext, useState } from 'react';
import { addCategoryToApi } from '../API/api';
import { ModalContext } from '../context/context';
import { DataContext } from '../context/DataContext/DataContext';
import ModalChangeDataWrapper from './modal/ModalChangeDataWrapper';
import NameInput from './UI/NameInput';
import TextArea from './UI/TextArea';

const AddCategoryForm: React.FC = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [nameIsDirty, setNameIsDirty] = useState(false);
  const [nameError, setNameError] = useState('Поле обязательно для заполнения');

  const { closeModal } = useContext(ModalContext);
  const { categories, setCategories } = useContext(DataContext);

  const handleOnChangeInput = (e: any) => {
    setName(e.target.value);
    if (e.target.value) {
      setNameError('');
    } else {
      setNameError('Поле обязательно для заполнения');
    }
  };

  const handleOnFocusInput = (e: any) => {
    setNameIsDirty(true);
  };

  const handleOnChangeTextArea = (e: any) => {
    setDescription(e.target.value);
  };

  const addNewCategory = () => {
    if (name) {
      const newCategory = {
        id: 0,
        name,
        description,
      };

      addCategoryToApi(newCategory);
      setCategories([...categories, newCategory]);
      closeModal.closeAddCategory();
    } else {
      setNameIsDirty(true);
      setNameError('Поле обязательно для заполнения');
    }
  };

  return (
    <ModalChangeDataWrapper title="Создание категории" primaryButtonText="Создать" primaryButtonClickHandler={addNewCategory}>
      <div className="row">
        <NameInput
          placeholder="Введите имя категории"
          label="Имя"
          isRequired
          isDirty={nameIsDirty}
          error={nameError}
          value={name}
          onChangeHandler={handleOnChangeInput}
          onFocusHandler={handleOnFocusInput}
        />
      </div>
      <div className=" row">
        <TextArea
          placeholder="Введите описание категории"
          label="Описание"
          value={description}
          onChangeHandler={handleOnChangeTextArea}
        />
      </div>
    </ModalChangeDataWrapper>
  );
};

export default AddCategoryForm;
