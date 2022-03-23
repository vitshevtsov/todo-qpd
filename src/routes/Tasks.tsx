import React, { useContext, useEffect } from 'react';
import { getTasksFromApi } from '../API/api';
import List from '../components/List';
import { DataContext } from '../context/context';
// import IListItem from '../types/data';

const Tasks: React.FC = () => {
  const { tasks, setTasks } = useContext(DataContext);
  // todo вернуть типизацию по IListItem
  // useEffect(() => {
  //   getTasksFromApi(setTasks);
  //   console.log('fetch is done');
  // }, []);

  return (
    <main>
      <div className="container">
        <List items={tasks} />
      </div>
    </main>
  );
};

export default Tasks;
