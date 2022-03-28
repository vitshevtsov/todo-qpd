import React, { useContext } from 'react';
import List from '../components/List';
import { DataContext } from '../context/context';

const Tasks: React.FC = () => {
  const { tasks } = useContext(DataContext);

  return (
    <main>
      <div className="container">
        <List items={tasks} />
      </div>
    </main>
  );
};

export default Tasks;
