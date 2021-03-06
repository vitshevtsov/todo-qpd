/* eslint-disable import/no-cycle */
/* eslint-disable import/extensions */
import React, { useContext, useState } from 'react';
import { DataContext, ModalContext, ServiceContext } from '../context/context';
import ModalChangeDataWrapper from './modal/ModalChangeDataWrapper/ModalChangeDataWrapper';
import Dropdown from './UI/Dropdown/Dropdown';
import NameInput from './UI/NameInput/NameInput';
import TextArea from './UI/TextArea/TextArea';
import { ITaskItem, ICategoryItem, ICategoryState } from '../types/data';
// todo ошибка на бэке - не сохраняется измененная категория при редакт-и задачи

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
  const taskToEdit = tasks.find((item: ITaskItem) => item.id === openedItemId);

  const initCategoryState = {
    name: (taskToEdit!.categoryId) ? categories.find((item : ICategoryItem) => taskToEdit!.categoryId === item.id)?.name : '',
    id: taskToEdit!.categoryId,
  };

  const [name, setName] = useState(taskToEdit!.name);
  const [nameIsDirty, setNameIsDirty] = useState(false);
  const [nameError, setNameError] = useState('');

  const [category, setCategory] = useState<ICategoryState>(initCategoryState as ICategoryState);
  const [description, setDescription] = useState(taskToEdit!.description);

  const { closeModal } = useContext(ModalContext);
  const { taskService } = useContext(ServiceContext);

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

  const handleCloseButtonClick = () => {
    setOpenedItemId(null);
    closeModal.closeEditTask();
  };

  /**
 * Функция при условии пройденной валидации редактирует задачу в api,
 * и сохраняет изменения в state в случае получения ответа сервиса
 */
  const editTask = async () => {
    if (name) {
      const editedTask = {
        id: taskToEdit!.id,
        name,
        description,
        categoryId: category.id,
      };

      const response = await taskService.editTask(editedTask);
      if (response) {
        closeModal.closeEditTask();
        setTasks(tasks.map((item: ITaskItem) => {
          if (item.id === openedItemId) {
            return editedTask;
          }
          return item;
        }));
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
    <ModalChangeDataWrapper
      title="Редактирование задачи"
      primaryButtonText="Сохранить"
      primaryButtonClickHandler={editTask}
      primaryButtonWidth="200px"
      onClickCloseButton={handleCloseButtonClick}
      closeButtonText="Закрыть"
      closeButtonWidth="120px"
    >
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
