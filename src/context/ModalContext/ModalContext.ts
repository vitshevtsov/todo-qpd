/* eslint-disable import/prefer-default-export */
import { createContext } from 'react';
import { IModalContext } from '../../types/data';

export const ModalContext = createContext<IModalContext>({} as IModalContext);
