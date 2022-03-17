import React from 'react';
import ModalChangeDataWrapper from './modal/ModalChangeDataWrapper';
import Dropdown from './UI/Dropdown';
import NameInput from './UI/NameInput';
import TextArea from './UI/TextArea';

const AddTaskForm: React.FC = () => (
  <ModalChangeDataWrapper title="Создание задачи" primaryButtonText="Создать">
    <div className="row">
      <NameInput
        placeholder="Введите имя задачи"
        label="Имя"
        isRequired
      />
      <Dropdown />
    </div>
    <div className=" row">
      <TextArea
        placeholder="Введите описание задачи"
        label="Описание"
      />
    </div>
  </ModalChangeDataWrapper>
);

export default AddTaskForm;
