/* eslint-disable import/no-cycle */
/* eslint-disable import/extensions */
import React, { useContext, useState } from 'react';
import { DataContext, ModalContext } from '../context/context';
import ModalChangeDataWrapper from './modal/ModalChangeDataWrapper';
import Dropdown from './UI/Dropdown';
import NameInput from './UI/NameInput';
import TextArea from './UI/TextArea';
import { addTaskToApi } from '../API/api';

const AddTaskForm: React.FC = () => {
  const initCategoryState = {
    name: '',
    id: '',
  };
  const [name, setName] = useState('');
  const [category, setCategory] = useState(initCategoryState);
  const [description, setDescription] = useState('');

  const { closeModal } = useContext(ModalContext);
  const { tasks, setTasks } = useContext(DataContext);

  const handleOnChangeInput = (e: any) => {
    setName(e.target.value);
  };

  const handleOnChangeTextArea = (e: any) => {
    setDescription(e.target.value);
  };

  const addNewTask = () => {
    const newTask = {
      id: tasks.length + 1,
      name,
      description,
      categoryId: category.id,
    };

    addTaskToApi(tasks.length + 1, name, description, category.id);
    setTasks([...tasks, newTask]);
    closeModal.closeAddTask();
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
        <Dropdown value={category.name} setValue={setCategory} />
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
