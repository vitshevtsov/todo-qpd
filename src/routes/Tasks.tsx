import React, { useContext } from 'react';
import List from '../components/List';
import { DataContext } from '../context/context';
// import IListItem from '../types/data';

const Tasks: React.FC = () => {
  const { tasks } = useContext(DataContext);
  // todo вернуть типизацию по IListItem

  return (
    <main>
      <div className="container">
        <List items={tasks} />
      </div>
    </main>
  );
};

export default Tasks;
