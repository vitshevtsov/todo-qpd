import React, { useContext } from 'react';
import List from '../components/List';
import { DataContext } from '../context/DataContext/DataContext';

const Categories: React.FC = () => {
  const { categories } = useContext(DataContext);

  return (
    <main>
      <div className="container">
        <List items={categories} />
      </div>
    </main>
  );
};

export default Categories;
