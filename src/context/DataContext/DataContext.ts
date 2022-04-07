/* eslint-disable import/prefer-default-export */
import { createContext } from 'react';
import { IDataContext } from '../../types/data';

export const DataContext = createContext<IDataContext>({} as IDataContext);
