/* eslint-disable import/prefer-default-export */
import React, { createContext } from 'react';
// import Categories from '../../routes/Categories';
import IListItem from '../../types/data';

interface IDataContext {

tasks: IListItem[] | never[];
categories: IListItem[] | never[];
setTasks: React.Dispatch<React.SetStateAction<IListItem[] | never[]>>;
setCategories: React.Dispatch<React.SetStateAction<IListItem[] | never[]>>;
openedItemId: number | null;
setOpenedItemId: React.Dispatch<React.SetStateAction<number | null>>;
}

export const DataContext = createContext<IDataContext>({} as IDataContext);
