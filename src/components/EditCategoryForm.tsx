/* eslint-disable import/no-cycle */
/* eslint-disable import/extensions */
import React, { useContext, useState } from 'react';
import { editCategoryAtApi } from '../API/api';
import { DataContext, ModalContext } from '../context/context';
import ModalChangeDataWrapper from './modal/ModalChangeDataWrapper';
import NameInput from './UI/NameInput';
import TextArea from './UI/TextArea';

const EditCategoryForm: React.FC = () => {
  const {
    categories, setCategories, openedItemId, setOpenedItemId,
  } = useContext(DataContext);
  const categoryToEdit = categories.find((item: any) => item.id === openedItemId);

  const [name, setName] = useState(categoryToEdit.name);
  const [description, setDescription] = useState(categoryToEdit.description);

  const { closeModal } = useContext(ModalContext);

  const handleOnChangeInput = (e: any) => {
    setName(e.target.value);
  };

  const handleOnChangeTextArea = (e: any) => {
    setDescription(e.target.value);
  };

  const editCategory = () => {
    const editedCategory = {
      id: categoryToEdit.id,
      name,
      description,
    };
    editCategoryAtApi(editedCategory);
    // todo типизация коллбэка map
    setCategories(categories.map((item: { id: any; name?: any; description?: any;}) => {
      if (item.id === openedItemId) {
        return editedCategory;
      }
      return item;
    }));
    setOpenedItemId(null);
    closeModal.closeEditCategory();
  };

  return (
    <ModalChangeDataWrapper title="Редактирование категории" primaryButtonText="Сохранить" primaryButtonClickHandler={editCategory}>
      <div className="row">
        <NameInput
          placeholder=""
          label="Имя"
          maxLength={255}
          isRequired
          value={name}
          onChangeHandler={handleOnChangeInput}
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
