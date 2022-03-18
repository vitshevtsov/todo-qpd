/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import AddTaskForm from '../../components/AddTaskForm';
import AddCategoryForm from '../../components/AddCategoryForm';
import { ModalContext } from './ModalContext';
// компоненты, находящиеся в Provider, смогут пользоваться методами контекста openModal, closeModal

const ModalProvider = ({ children }) => {
  const [addTaskIsOpened, setAddTaskIsOpened] = useState(false);
  const [addCategoryIsOpened, setAddCategoryIsOpened] = useState(false);

  const openModal = {
    openAddTask: () => setAddTaskIsOpened(true),
    openAddCategory: () => setAddCategoryIsOpened(true),
  };

  const closeModal = {
    closeAddTask: () => setAddTaskIsOpened(false),
    closeAddCategory: () => setAddCategoryIsOpened(false),
  };

  const valueModalProvider = {
    openModal,
    closeModal,
  };

  return (
    <ModalContext.Provider value={valueModalProvider}>
      {addTaskIsOpened && <AddTaskForm />}
      {addCategoryIsOpened && <AddCategoryForm />}

      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
