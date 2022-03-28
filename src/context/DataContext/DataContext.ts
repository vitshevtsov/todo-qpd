/* eslint-disable import/prefer-default-export */
import { createContext } from 'react';
// import IListitem from '../../types/data';

interface IDataContext {
    tasks: any;
    categories: any;
    setTasks: any;
    setCategories: any;
    openedItemId: any;
    setOpenedItemId: any;
}
// todo доработать типизацию. Такая всё ломает:
// tasks: IListitem[];
// categories: IListitem[];
// setTasks: React.Dispatch<React.SetStateAction<IListitem[]>>;
// setCategories: React.Dispatch<React.SetStateAction<IListitem[]>>;
// openedItemId: number | null;
// setOpenedItemId: React.Dispatch<React.SetStateAction<number | null>>;

export const DataContext = createContext<IDataContext>({} as IDataContext);
