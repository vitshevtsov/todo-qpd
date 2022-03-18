/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import AddTaskForm from '../../components/AddTaskForm';
import AddCategoryForm from '../../components/AddCategoryForm';
import EditTaskForm from '../../components/EditTaskForm';
import EditCategoryForm from '../../components/EditCategoryForm';

import { ModalContext } from './ModalContext';
// компоненты, находящиеся в Provider, смогут пользоваться методами контекста openModal, closeModal

const ModalProvider = ({ children }) => {
  const [addTaskIsOpened, setAddTaskIsOpened] = useState(false);
  const [addCategoryIsOpened, setAddCategoryIsOpened] = useState(false);
  const [editTaskIsOpened, setEditTaskIsOpened] = useState(false);
  const [editCategoryIsOpened, setEditCategoryIsOpened] = useState(false);

  const openModal = {
    openAddTask: () => setAddTaskIsOpened(true),
    openAddCategory: () => setAddCategoryIsOpened(true),
    openEditTask: () => setEditTaskIsOpened(true),
    openEditCategory: () => setEditCategoryIsOpened(true),
  };

  const closeModal = {
    closeAddTask: () => setAddTaskIsOpened(false),
    closeAddCategory: () => setAddCategoryIsOpened(false),
    closeEditTask: () => setEditTaskIsOpened(false),
    closeEditCategory: () => setEditCategoryIsOpened(false),

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

      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
