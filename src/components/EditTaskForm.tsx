/* eslint-disable import/no-cycle */
/* eslint-disable import/extensions */
import React, { useContext, useState } from 'react';
import { editTaskAtApi } from '../API/api';
import { DataContext, ModalContext } from '../context/context';
import ModalChangeDataWrapper from './modal/ModalChangeDataWrapper';
import Dropdown from './UI/Dropdown';
import NameInput from './UI/NameInput';
import TextArea from './UI/TextArea';
import IListItem from '../types/data';

interface ICategoryProps {
  name: string;
  id: number;
}

const EditTaskForm: React.FC = () => {
  const {
    tasks, setTasks, categories, openedItemId, setOpenedItemId,
  } = useContext(DataContext);
  const taskToEdit = tasks.find((item: IListItem) => item.id === openedItemId);

  const initCategoryState = {
    name: (taskToEdit!.categoryId) ? categories.find((item : IListItem) => taskToEdit!.categoryId === item.id)?.name : '',
    id: taskToEdit!.categoryId,
  };

  const [name, setName] = useState(taskToEdit!.name);
  const [nameIsDirty, setNameIsDirty] = useState(false);
  const [nameError, setNameError] = useState('Поле обязательно для заполнения');

  const [category, setCategory] = useState<ICategoryProps>(initCategoryState as ICategoryProps);
  const [description, setDescription] = useState(taskToEdit!.description);

  const { closeModal } = useContext(ModalContext);

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

  const editTask = () => {
    if (name) {
      const editedTask = {
        id: taskToEdit!.id,
        name,
        description,
        categoryId: category.id,
      };

      editTaskAtApi(editedTask);
      setTasks(tasks.map((item: IListItem) => {
        if (item.id === openedItemId) {
          return editedTask;
        }
        return item;
      }));
      setOpenedItemId(null);
      closeModal.closeEditTask();
    } else {
      setNameIsDirty(true);
      setNameError('Поле обязательно для заполнения');
    }
  };

  return (
    <ModalChangeDataWrapper title="Редактирование задачи" primaryButtonText="Сохранить" primaryButtonClickHandler={editTask}>
      <div className="row">
        <NameInput
          width="364px"
          placeholder=""
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
          placeholder=""
          label="Описание"
          maxLength={1536}
          value={description}
          onChangeHandler={handleOnChangeTextArea}
        />
      </div>
    </ModalChangeDataWrapper>
  );
};

export default EditTaskForm;
