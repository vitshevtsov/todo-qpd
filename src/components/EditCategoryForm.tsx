/* eslint-disable import/no-cycle */
/* eslint-disable import/extensions */
import React, { useContext, useState } from 'react';
import { editCategoryAtApi } from '../API/api';
import { DataContext, ModalContext } from '../context/context';
import ModalChangeDataWrapper from './modal/ModalChangeDataWrapper';
import NameInput from './UI/NameInput';
import TextArea from './UI/TextArea';
import IListItem from '../types/data';

const EditCategoryForm: React.FC = () => {
  const {
    categories, setCategories, openedItemId, setOpenedItemId,
  } = useContext(DataContext);
  const categoryToEdit = categories.find((item: IListItem) => item.id === openedItemId);

  const [name, setName] = useState(categoryToEdit.name);
  const [description, setDescription] = useState(categoryToEdit.description);
  const [nameIsDirty, setNameIsDirty] = useState(false);
  const [nameError, setNameError] = useState('Поле обязательно для заполнения');

  const { closeModal } = useContext(ModalContext);

  const handleOnChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    if (e.target.value) {
      setNameError('');
    } else {
      setNameError('Поле обязательно для заполнения');
    }
  };

  const handleOnFocusInput = () => {
    setNameIsDirty(true);
  };

  const handleOnChangeTextArea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.target.value);
  };

  const editCategory = () => {
    if (name) {
      const editedCategory = {
        id: categoryToEdit.id,
        name,
        description,
      };
      editCategoryAtApi(editedCategory);
      setCategories(categories.map((item: IListItem) => {
        if (item.id === openedItemId) {
          return editedCategory;
        }
        return item;
      }));
      setOpenedItemId(null);
      closeModal.closeEditCategory();
    } else {
      setNameIsDirty(true);
      setNameError('Поле обязательно для заполнения');
    }
  };

  return (
    <ModalChangeDataWrapper title="Редактирование категории" primaryButtonText="Сохранить" primaryButtonClickHandler={editCategory}>
      <div className="row">
        <NameInput
          width="752px"
          placeholder=""
          label="Имя"
          maxLength={255}
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
          placeholder=""
          label="Описание"
          maxLength={512}
          value={description}
          onChangeHandler={handleOnChangeTextArea}
        />
      </div>
    </ModalChangeDataWrapper>
  );
};

export default EditCategoryForm;
