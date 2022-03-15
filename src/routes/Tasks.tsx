import React from 'react';
import List from '../components/List';
import IListItem from '../types/data';

export default function Tasks() {
  const tasks: IListItem[] = [
    {
      id: 1,
      name: 'Моя_задача1',
      description: 'Моя_задача1_Описание',
      categoryId: 1,
    },
    {
      id: 2,
      name: 'Моя_задача2',
      description: 'Моя_задача2_Описание',
      categoryId: 2,
    },
    {
      id: 3,
      name: 'Моя_задача3',
      description: 'Моя_задача3_Описание',
      categoryId: 3,
    },
    {
      id: 4,
      name: 'Моя_задача4',
      description: 'Моя_задача4_Описание',
      categoryId: 4,
    },
    {
      id: 5,
      name: 'Моя_задача5',
      description: 'Моя_задача5_Описание',
      categoryId: 5,
    },
    {
      id: 6,
      name: 'Моя_задача6',
      description: 'Моя_задача6_Описание',
      categoryId: 6,
    },
    {
      id: 7,
      name: 'Моя_задача7',
      description: 'Моя_задача7_Описание',
      categoryId: 7,
    },
    {
      id: 8,
      name: 'Моя_задача8',
      description: 'Моя_задача8_Описание',
      categoryId: 8,
    },
  ];

  return (
    <main>
      <div className="container">
        <List items={tasks} />
      </div>
    </main>
  );
}
