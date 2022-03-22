/* eslint-disable import/prefer-default-export */
/* eslint-disable consistent-return */
import { createContext } from 'react';

export const DataContext = createContext({
  tasks: [],
  categories: [],
});
