/* eslint-disable import/no-cycle */
/* eslint-disable import/extensions */
import React, { useContext, useState } from 'react';
import { DataContext, ModalContext, ServiceContext } from '../context/context';
import ModalChangeDataWrapper from './modal/ModalChangeDataWrapper/ModalChangeDataWrapper';
import NameInput from './UI/NameInput/NameInput';
import TextArea from './UI/TextArea/TextArea';
import { ICategoryItem } from '../types/data';

/**
 * Компонент, конфигурирующий модальное окно редактирования категории
 *
 * Хранит состояние полей имени, описания, boolean isDirty для отслеживания валидации,
 * nameError для вывода ошибок валидации
 *
 * возвращает обертку для модальных окон ModalChangeDataWrapper, содержащую пропсы
 * и UI-компоненты, необходимые для редактирования категории
 */
const EditCategoryForm: React.FC = () => {
  const { closeModal } = useContext(ModalContext);
  const { categoryService } = useContext(ServiceContext);
  const {
    categories, setCategories, openedItemId, setOpenedItemId,
  } = useContext(DataContext);

  const categoryToEdit = categories.find((item: ICategoryItem) => item.id === openedItemId);

  const [name, setName] = useState(categoryToEdit!.name);
  const [description, setDescription] = useState(categoryToEdit!.description);
  const [nameIsDirty, setNameIsDirty] = useState(false);
  const [nameError, setNameError] = useState('');

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
    closeModal.closeEditCategory();
  };

  /**
 * Функция при условии пройденной валидации редактирует категорию в api,
 * и сохраняет изменения в state при условии ответа от сервиса
 */
  const editCategory = async () => {
    if (name) {
      const editedCategory = {
        id: categoryToEdit!.id,
        name,
        description,
      };

      const response = await categoryService.editCategory(editedCategory);
      if (response) {
        closeModal.closeEditCategory();
        setCategories(categories.map((item: ICategoryItem) => {
          if (item.id === openedItemId) {
            return editedCategory;
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
      title="Редактирование категории"
      primaryButtonText="Сохранить"
      primaryButtonClickHandler={editCategory}
      primaryButtonWidth="200px"
      onClickCloseButton={handleCloseButtonClick}
      closeButtonText="Закрыть"
      closeButtonWidth="120px"
    >
      <div className="row">
        <NameInput
          width="752px"
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
      </div>
      <div className=" row">
        <TextArea
          placeholder=""
          label="Описание"
          maxLength={512}
          value={description}
          onChangeHandler={handleOnChangeTextArea}
        />
      </div>
    </ModalChangeDataWrapper>
  );
};

export default EditCategoryForm;
