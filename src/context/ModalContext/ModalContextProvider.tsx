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
// компоненты, находящиеся в Provider, смогут пользоваться методами контекста openModal, closeModal

interface IModalProviderProps {
  children: React.ReactChild | React.ReactNode;
}

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
