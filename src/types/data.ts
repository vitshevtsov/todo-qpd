/* eslint-disable no-unused-vars */
import React, { Dispatch, SetStateAction } from 'react';

export default interface IListItem {
  id: number;
  name: string;
  description: string;
  categoryId?: number;
  }

export interface IChangeDataWrapper {
    title: string;
    children?: React.ReactChild | React.ReactNode;
    primaryButtonText: string;
    primaryButtonClickHandler: () => void;
  }

export interface IConfirmActionWrapper {
    title: string;
    question: string;
    primaryButtonClickHandler: () => void;
  }

export interface IDropdownProps {
    setValue: Dispatch<SetStateAction<{ name: string; id: number; }>>;
    value: string;
    width: string;
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
    onFocusHandler?: any; // не могу прописать тип из-за условной отрисовки в компоненте NameInput
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
  tasks: IListItem[] | never[];
  categories: IListItem[] | never[];
  setTasks: React.Dispatch<React.SetStateAction<IListItem[] | never[]>>;
  setCategories: React.Dispatch<React.SetStateAction<IListItem[] | never[]>>;
  openedItemId: number | null;
  setOpenedItemId: React.Dispatch<React.SetStateAction<number | null>>;
}

export interface IDataProviderProps {
  children: React.ReactChild | React.ReactNode;
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

export interface IModalProviderProps {
  children: React.ReactChild | React.ReactNode;
}
