/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-cycle */
/* eslint-disable import/extensions */
import React, { useContext, useState } from 'react';
import { DataContext, ModalContext } from '../context/context';
import ModalChangeDataWrapper from './modal/ModalChangeDataWrapper/ModalChangeDataWrapper';
import Dropdown from './UI/Dropdown/Dropdown';
import NameInput from './UI/NameInput/NameInput';
import TextArea from './UI/TextArea/TextArea';
import { addTaskToApi } from '../API/api';
import { ITaskItem } from '../types/data';

/**
 * Компонент, конфигурирующий модальное окно добавления новой задачи
 *
 * Хранит состояние полей имени, описания, категории, boolean isDirty для отслеживания валидации,
 * nameError для вывода ошибок валидации
 *
 * возвращает обертку для модальных окон ModalChangeDataWrapper, содержащую пропсы
 * и UI-компоненты, необходимые для добавления новой задачи
 */
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
  console.log('render');
  /**
 * Функция при условии пройденной валидации добавляет новую задачу в api,
 * полученный с сервера ответ сохраняет в state
 */
  const addNewTask = async () => {
    if (name) {
      const newTask = {
        id: 0,
        name,
        description,
        categoryId: category.id,
      };

      const responseFromApi = await addTaskToApi(newTask);
      if (responseFromApi) {
        closeModal.closeAddTask();
        setTasks([...tasks, responseFromApi]);
        setOpenedItemId(null);
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
        <Dropdown
          width="364px"
          value={category.name}
          setValue={setCategory}
          placeholder="Выберите категорию"
          label="Категория"
        />
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
