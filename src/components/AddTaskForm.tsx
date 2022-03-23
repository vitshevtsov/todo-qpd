import React, { useState } from 'react';
import ModalChangeDataWrapper from './modal/ModalChangeDataWrapper';
import Dropdown from './UI/Dropdown';
import NameInput from './UI/NameInput';
import TextArea from './UI/TextArea';

const AddTaskForm: React.FC = () => {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');

  const handleOnChangeInput = (e: any) => {
    setName(e.target.value);
  };

  const handleOnChangeTextArea = (e: any) => {
    setDescription(e.target.value);
  };

  const addNewTask = () => {
    console.log({
      name,
      category,
      description,
    });
  };

  return (
    <ModalChangeDataWrapper title="Создание задачи" primaryButtonText="Создать" primaryButtonClickHandler={addNewTask}>
      <div className="row">
        <NameInput
          placeholder="Введите имя задачи"
          label="Имя"
          isRequired
          value={name}
          onChangeHandler={handleOnChangeInput}
        />
        <Dropdown value={category} setValue={setCategory} />
      </div>
      <div className=" row">
        <TextArea
          placeholder="Введите описание задачи"
          label="Описание"
          value={description}
          onChangeHandler={handleOnChangeTextArea}
        />
      </div>
    </ModalChangeDataWrapper>
  );
};

export default AddTaskForm;
