import React from 'react';
import ModalChangeDataWrapper from './modal/ModalChangeDataWrapper';
import NameInput from './UI/NameInput';
import TextArea from './UI/TextArea';

const EditCategoryForm: React.FC = () => (
  <ModalChangeDataWrapper title="Редактирование категории" primaryButtonText="Сохранить">
    <div className="row">
      <NameInput
        placeholder=""
        label="Имя"
        isRequired
      />
    </div>
    <div className=" row">
      <TextArea
        placeholder=""
        label="Описание"
      />
    </div>
  </ModalChangeDataWrapper>
);

export default EditCategoryForm;
