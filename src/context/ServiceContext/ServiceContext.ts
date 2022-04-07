/* eslint-disable import/prefer-default-export */
import { createContext } from 'react';
import { IServiceContext } from '../../types/data';

export const ServiceContext = createContext<IServiceContext>({} as IServiceContext);
