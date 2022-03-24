/* eslint-disable no-param-reassign */
/* eslint-disable import/no-cycle */
/* eslint-disable import/extensions */
/* eslint-disable implicit-arrow-linebreak */
import React, { useContext, useState } from 'react';
import { editTaskAtApi } from '../API/api';
import { DataContext, ModalContext } from '../context/context';
import ModalChangeDataWrapper from './modal/ModalChangeDataWrapper';
import Dropdown from './UI/Dropdown';
import NameInput from './UI/NameInput';
import TextArea from './UI/TextArea';

const EditTaskForm: React.FC = () => {
  const {
    tasks, setTasks, categories, openedItemId, setOpenedItemId,
  } = useContext(DataContext);
  const taskToEdit = tasks.find((item: any) => item.id === openedItemId);

  const initCategoryState = {
    // todo проверить корректно ли выводится категория (мб заменить на arr.find)
    name: (taskToEdit.categoryId) ? categories[taskToEdit.categoryId - 1].name : '',
    id: taskToEdit.categoryId,
  };
  console.log(taskToEdit.categoryId);

  console.log(categories[taskToEdit.categoryId - 1].name);

  const [name, setName] = useState(taskToEdit.name);
  const [category, setCategory] = useState(initCategoryState);
  const [description, setDescription] = useState(taskToEdit.description);

  const { closeModal } = useContext(ModalContext);

  const handleOnChangeInput = (e: any) => {
    setName(e.target.value);
  };

  const handleOnChangeTextArea = (e: any) => {
    setDescription(e.target.value);
  };

  const editTask = () => {
    const editedTask = {
      id: taskToEdit.id,
      name,
      description,
      categoryId: category.id,
    };
    console.log(taskToEdit.categoryId);
    console.log({ ...editedTask });
    editTaskAtApi(editedTask);
    // todo типизация коллбэка map
    setTasks(tasks.map((item: { id: any; name?: any; description?: any; categoryId?: any; }) => {
      if (item.id === openedItemId) {
        return editedTask;
      }
      return item;
    }));
    setOpenedItemId(null);
    closeModal.closeEditTask();
  };

  return (
  // todo должен принимать id из функции обработчика клика
    <ModalChangeDataWrapper title="Редактирование задачи" primaryButtonText="Сохранить" primaryButtonClickHandler={editTask}>
      <div className="row">
        <NameInput
          placeholder=""
          label="Имя"
          isRequired
          value={name}
          onChangeHandler={handleOnChangeInput}
        />
        <Dropdown value={category.name} setValue={setCategory} />
      </div>
      <div className=" row">
        <TextArea
          placeholder=""
          label="Описание"
          value={description}
          onChangeHandler={handleOnChangeTextArea}
        />
      </div>
    </ModalChangeDataWrapper>
  );
};

export default EditTaskForm;
