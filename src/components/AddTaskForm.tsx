/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
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
    id: 0,
  };
  const [name, setName] = useState('');
  const [nameIsDirty, setNameIsDirty] = useState(false);
  const [nameError, setNameError] = useState('Поле обязательно для заполнения');

  const [category, setCategory] = useState(initCategoryState);
  const [description, setDescription] = useState('');

  const { closeModal } = useContext(ModalContext);
  const { tasks, setTasks, setOpenedItemId } = useContext(DataContext);

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

  const addNewTask = async () => {
    if (name) {
      const newTask = (category.id)
        ? {
          id: 0,
          name,
          description,
          categoryId: category.id,
        }
        : {
          id: 0,
          name,
          description,
        };

      const responseFromApi = await addTaskToApi(newTask);
      if (responseFromApi) {
        setTasks([...tasks, responseFromApi]);
        setOpenedItemId(null);
        closeModal.closeAddTask();
      } else {
        alert('Произошла ошибка. Попробуйте позднее');
      }
    } else {
      setNameIsDirty(true);
      setNameError('Поле обязательно для заполнения');
    }
  };

  return (
    <ModalChangeDataWrapper title="Создание задачи" primaryButtonText="Создать" primaryButtonClickHandler={addNewTask}>
      <div className="row">
        <NameInput
          width="364px"
          placeholder="Введите имя задачи"
          label="Имя"
          maxLength={255}
          isRequired
          isDirty={nameIsDirty}
          error={nameError}
          value={name}
          onChangeHandler={handleOnChangeInput}
          onFocusHandler={handleOnFocusInput}
        />
        <Dropdown width="364px" value={category.name} setValue={setCategory} />
      </div>
      <div className=" row">
        <TextArea
          placeholder="Введите описание задачи"
          label="Описание"
          maxLength={1536}
          value={description}
          onChangeHandler={handleOnChangeTextArea}
        />
      </div>
    </ModalChangeDataWrapper>
  );
};

export default AddTaskForm;
