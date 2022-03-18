import React from 'react';
import ModalChangeDataWrapper from './modal/ModalChangeDataWrapper';
import Dropdown from './UI/Dropdown';
import NameInput from './UI/NameInput';
import TextArea from './UI/TextArea';

const EditTaskForm: React.FC = () => (
  <ModalChangeDataWrapper title="Редактирование задачи" primaryButtonText="Сохранить">
    <div className="row">
      <NameInput
        placeholder=""
        label="Имя"
        isRequired
      />
      <Dropdown />
    </div>
    <div className=" row">
      <TextArea
        placeholder=""
        label="Описание"
      />
    </div>
  </ModalChangeDataWrapper>
);

export default EditTaskForm;
