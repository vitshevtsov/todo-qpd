/* eslint-disable import/prefer-default-export */
import { createContext } from 'react';

interface IModalContext {
    openModal: {
        openAddTask: () => void;
        openAddCategory: () => void;
        openEditTask: () => void;
        openEditCategory: () => void;
        openDeleteTask: () => void;
        openDeleteCategory: () => void;
    };
    closeModal: {
        closeAddTask: () => void;
        closeAddCategory: () => void;
        closeEditTask: () => void;
        closeEditCategory: () => void;
        closeDeleteTask: () => void;
        closeDeleteCategory: () => void;
    };
}

export const ModalContext = createContext<IModalContext>({} as IModalContext);
