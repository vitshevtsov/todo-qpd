/* eslint-disable import/extensions */
/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import AddTaskForm from '../../components/AddTaskForm';
import AddCategoryForm from '../../components/AddCategoryForm';
import EditTaskForm from '../../components/EditTaskForm';
import EditCategoryForm from '../../components/EditCategoryForm';
import DeleteTaskForm from '../../components/DeleteTaskForm';
import DeleteCategoryForm from '../../components/DeleteCategoryForm';
import { ModalContext } from './ModalContext';

interface IModalProviderProps {
  children: React.ReactChild | React.ReactNode;
}

/**
 * Компонент, возвращающий провайдер контекста модалок. Компоненты, находящиеся в Provider (подписчики),
 *  смогут пользоваться данными контекста. Хранит состояние всех видов модалок (boolean).
 *
 * В контексте хранятся объекты openModal, closeModal, содержащие методы для открытия / закрытия модалок
 * (в соответствии с названиями методов)
 *
 * возвращает провайдер с переданным значением и слотом для children
 */
const ModalProvider = ({ children }: IModalProviderProps) => {
  const [addTaskIsOpened, setAddTaskIsOpened] = useState(false);
  const [addCategoryIsOpened, setAddCategoryIsOpened] = useState(false);
  const [editTaskIsOpened, setEditTaskIsOpened] = useState(false);
  const [editCategoryIsOpened, setEditCategoryIsOpened] = useState(false);
  const [deleteTaskIsOpened, setDeleteTaskIsOpened] = useState(false);
  const [deleteCategoryIsOpened, setDeleteCategoryIsOpened] = useState(false);

  const openModal = {
    openAddTask: () => setAddTaskIsOpened(true),
    openAddCategory: () => setAddCategoryIsOpened(true),
    openEditTask: () => setEditTaskIsOpened(true),
    openEditCategory: () => setEditCategoryIsOpened(true),
    openDeleteTask: () => setDeleteTaskIsOpened(true),
    openDeleteCategory: () => setDeleteCategoryIsOpened(true),
  };

  const closeModal = {
    closeAddTask: () => setAddTaskIsOpened(false),
    closeAddCategory: () => setAddCategoryIsOpened(false),
    closeEditTask: () => setEditTaskIsOpened(false),
    closeEditCategory: () => setEditCategoryIsOpened(false),
    closeDeleteTask: () => setDeleteTaskIsOpened(false),
    closeDeleteCategory: () => setDeleteCategoryIsOpened(false),

  };

  const valueModalProvider = {
    openModal,
    closeModal,
  };

  return (
    <ModalContext.Provider value={valueModalProvider}>
      {addTaskIsOpened && <AddTaskForm />}
      {addCategoryIsOpened && <AddCategoryForm />}
      {editTaskIsOpened && <EditTaskForm />}
      {editCategoryIsOpened && <EditCategoryForm />}
      {deleteTaskIsOpened && <DeleteTaskForm />}
      {deleteCategoryIsOpened && <DeleteCategoryForm />}

      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
