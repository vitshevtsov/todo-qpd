/* eslint-disable import/no-cycle */
/* eslint-disable import/extensions */
import React, { useContext, useState } from 'react';
import { editTaskAtApi } from '../API/api';
import { DataContext, ModalContext } from '../context/context';
import ModalChangeDataWrapper from './modal/ModalChangeDataWrapper';
import Dropdown from './UI/Dropdown/Dropdown';
import NameInput from './UI/NameInput/NameInput';
import TextArea from './UI/TextArea/TextArea';
import IListItem from '../types/data';

interface ICategoryState {
  name: string;
  id: number;
}

/**
 * Компонент, конфигурирующий модальное окно редактирования задачи
 *
 * Хранит состояние полей имени, описания, категории (интерфейс ICategoryState), boolean isDirty для отслеживания валидации,
 * nameError для вывода ошибок валидации
 *
 * возвращает обертку для модальных окон ModalChangeDataWrapper, содержащую пропсы
 * и UI-компоненты, необходимые для редактирования задачи
 */
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
  const [nameError, setNameError] = useState('');

  const [category, setCategory] = useState<ICategoryState>(initCategoryState as ICategoryState);
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

  /**
 * Функция при условии пройденной валидации редактирует задачу в api,
 * и сохраняет изменения в state (не дожидаясь ответа сервера, тк id не меняется)
 */
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
