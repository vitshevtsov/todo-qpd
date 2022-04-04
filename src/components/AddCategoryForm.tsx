/* eslint-disable import/no-cycle */
/* eslint-disable import/extensions */
import React, { useContext, useState } from 'react';
import { addCategoryToApi } from '../API/api';
import { ModalContext } from '../context/context';
import { DataContext } from '../context/DataContext/DataContext';
import ModalChangeDataWrapper from './modal/ModalChangeDataWrapper/ModalChangeDataWrapper';
import NameInput from './UI/NameInput/NameInput';
import TextArea from './UI/TextArea/TextArea';

/**
 * Компонент, конфигурирующий модальное окно добавления новой категории
 *
 * Хранит состояние полей имени, описания, boolean isDirty для отслеживания валидации,
 * nameError для вывода ошибок валидации
 *
 * возвращает обертку для модальных окон ModalChangeDataWrapper, содержащую пропсы
 * и UI-компоненты, необходимые для добавления новой категории
 */
const AddCategoryForm: React.FC = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [nameIsDirty, setNameIsDirty] = useState(false);
  const [nameError, setNameError] = useState('Поле обязательно для заполнения');

  const { closeModal } = useContext(ModalContext);
  const { categories, setCategories, setOpenedItemId } = useContext(DataContext);

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
 * Функция при условии пройденной валидации добавляет новую категорию в api,
 * полученный с сервера ответ сохраняет в state
 */
  const addNewCategory = async () => {
    if (name) {
      const newCategory = {
        id: 0,
        name,
        description,
      };

      const responseFromApi = await addCategoryToApi(newCategory);
      if (responseFromApi) {
        setCategories([...categories, responseFromApi]);
        setOpenedItemId(null);
        closeModal.closeAddCategory();
      } else {
        alert('Произошла ошибка. Попробуйте позднее');
      }
    } else {
      setNameIsDirty(true);
      setNameError('Поле обязательно для заполнения');
    }
  };

  return (
    <ModalChangeDataWrapper title="Создание категории" primaryButtonText="Создать" primaryButtonClickHandler={addNewCategory}>
      <div className="row">
        <NameInput
          width="752px"
          placeholder="Введите имя категории"
          label="Имя"
          maxLength={255}
          isRequired
          isDirty={nameIsDirty}
          error={nameError}
          value={name}
          onChangeHandler={handleOnChangeInput}
          onFocusHandler={handleOnFocusInput}
        />
      </div>
      <div className=" row">
        <TextArea
          placeholder="Введите описание категории"
          label="Описание"
          maxLength={512}
          value={description}
          onChangeHandler={handleOnChangeTextArea}
        />
      </div>
    </ModalChangeDataWrapper>
  );
};

export default AddCategoryForm;
