/* eslint-disable no-unused-vars */
import React, { Dispatch, SetStateAction } from 'react';

export interface ITaskItem {
  id: number;
  name: string;
  description: string;
  categoryId: number;
  }

export interface ICategoryItem {
    id: number;
    name: string;
    description: string;
    }

export interface ITaskService {
      getTasks: () => Promise<any> | ITaskItem[] | undefined;
      addTask: (newTask: ITaskItem) => Promise<any> | ITaskItem | undefined;
      editTask: (taskToEdit: ITaskItem) => Promise<any> | ITaskItem | undefined;
      deleteTask: (id: number) => Promise<any> | number | undefined;
    }

export interface ICategoryService {
      getCategories: () => Promise<any> | ICategoryItem[] | undefined;
      addCategory: (newCategory: ICategoryItem) => Promise<any> | ICategoryItem | undefined;
      editCategory: (categoryToEdit: ICategoryItem) => Promise<any> | ICategoryItem | undefined;
      deleteCategory: (id: number) => Promise<any> | number | undefined;
    }

export interface IChangeDataWrapper {
    title: string;
    children?: React.ReactChild | React.ReactNode;
    primaryButtonText: string;
    primaryButtonWidth: string;
    primaryButtonClickHandler: () => void;
    closeButtonText: string;
    closeButtonWidth: string;
    onClickCloseButton: () => void;
  }

export interface IConfirmActionWrapper {
    title: string;
    question: string;
    primaryButtonText: string;
    primaryButtonWidth: string;
    primaryButtonClickHandler: () => void;
    closeButtonText: string;
    closeButtonWidth: string;
    onClickCloseButton: () => void;
  }

export interface IDropdownProps {
    setValue: Dispatch<SetStateAction<{ name: string; id: number; }>>;
    value: string;
    width: string;
    placeholder: string;
    label: string;
  }

export interface IImgButtonProps {
    onClickHandler: (e: React.MouseEvent<HTMLButtonElement>) => void;
    src: string;
    alt: string;
  }

export interface INameInputProps {
    error?: string;
    width: string;
    placeholder: string;
    maxLength?: number;
    readonly?: boolean;
    onClickHandler?: (e: React.MouseEvent<HTMLInputElement>) => void;
    onChangeHandler?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onFocusHandler?: any;
    value: string;
    isRequired?: boolean;
    label: string;
    isDirty?: boolean;
  }

export interface ITextAreaProps {
    maxLength?: number;
    placeholder: string;
    value: string;
    onChangeHandler: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    label: string;
  }

export interface ITextButtonProps {
    width: string;
    isPrimary?: boolean;
    text: string;
    onClickHandler?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  }

export interface ICategoryState {
    name: string;
    id: number;
  }

export interface IListProps {
    items: any[];
    renderItem: (item: any) => React.ReactChild | React.ReactNode;
  }

export type Url = string;
export type GetUrl = (id: number) => string;

export interface IDataContext {
  tasks: ITaskItem[] | never[];
  categories: ICategoryItem[] | never[];
  setTasks: React.Dispatch<React.SetStateAction<ITaskItem[] | never[]>>;
  setCategories: React.Dispatch<React.SetStateAction<ICategoryItem[] | never[]>>;
  openedItemId: number | null;
  setOpenedItemId: React.Dispatch<React.SetStateAction<number | null>>;
}
export interface IModalContext {
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
export interface IServiceContext {
  taskService: ITaskService;
  categoryService: ICategoryService;
}
