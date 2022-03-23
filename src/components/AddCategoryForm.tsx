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

  const { closeModal } = useContext(ModalContext);
  const { categories, setCategories } = useContext(DataContext);

  const handleOnChangeInput = (e: any) => {
    setName(e.target.value);
  };

  const handleOnChangeTextArea = (e: any) => {
    setDescription(e.target.value);
  };

  const addNewCategory = () => {
    const newCategory = {
      id: categories.length + 1,
      name,
      description,
    };

    addCategoryToApi(categories.length + 1, name, description);
    setCategories([...categories, newCategory]);
    closeModal.closeAddCategory();
  };

  return (
    <ModalChangeDataWrapper title="Создание категории" primaryButtonText="Создать" primaryButtonClickHandler={addNewCategory}>
      <div className="row">
        <NameInput
          placeholder="Введите имя категории"
          label="Имя"
          isRequired
          value={name}
          onChangeHandler={handleOnChangeInput}
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
