import React from 'react';
import ModalChangeDataWrapper from './modal/ModalChangeDataWrapper';
import NameInput from './UI/NameInput';
import TextArea from './UI/TextArea';

const AddCategoryForm: React.FC = () => (
  <ModalChangeDataWrapper title="Создание категории" primaryButtonText="Создать">
    <div className="row">
      <NameInput
        placeholder="Введите имя категории"
        label="Имя"
        isRequired
      />
    </div>
    <div className=" row">
      <TextArea
        placeholder="Введите описание категории"
        label="Описание"
      />
    </div>
  </ModalChangeDataWrapper>
);

export default AddCategoryForm;
