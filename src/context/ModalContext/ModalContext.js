/* eslint-disable import/prefer-default-export */
import { createContext } from 'react';

export const ModalContext = createContext({
  openModal: () => {},
  closeModal: () => {},
});
