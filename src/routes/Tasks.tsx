import React, { useContext } from 'react';
import List from '../components/List';
import TaskItem from '../components/TaskItem';
import { DataContext } from '../context/context';

const Tasks: React.FC = () => {
  const { tasks } = useContext(DataContext);

  return (
    <main>
      <div className="container">
        <List
          items={tasks}
          renderItem={(task) => (
            <TaskItem
              key={task.id}
              id={task.id}
              name={task.name}
              categoryId={task.categoryId}
              description={task.description}
            />
          )}
        />
      </div>
    </main>
  );
};

export default Tasks;
