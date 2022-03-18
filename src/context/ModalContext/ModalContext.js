/* eslint-disable import/prefer-default-export */
import { createContext } from 'react';

export const ModalContext = createContext({
  openModal: {
    openAddTask: () => {},
    openAddCategory: () => {},
    openEditTask: () => {},
    openEditCategory: () => {},
  },

  closeModal: {
    closeAddTask: () => {},
    closeAddCategory: () => {},
    closeEditTask: () => {},
    closeEditCategory: () => {},
  },
});
