/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import AddTaskForm from '../../components/AddTaskForm';
import { ModalContext } from './ModalContext';
// компоненты, находящиеся в Provider, смогут пользоваться методами контекста openModal, closeModal

const ModalProvider = ({ children }) => {
  const [modalOpened, setModalOpened] = useState(false);

  const openModal = () => {
    setModalOpened(true);
  };

  const closeModal = () => {
    setModalOpened(false);
  };

  const valueModalProvider = {
    openModal,
    closeModal,
  };

  return (
    <ModalContext.Provider value={valueModalProvider}>
      {modalOpened && <AddTaskForm />}
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
