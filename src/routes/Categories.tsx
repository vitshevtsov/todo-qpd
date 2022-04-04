import React, { useContext } from 'react';
import List from '../components/List';
import CategoryItem from '../components/TaskItem';
import { DataContext } from '../context/DataContext/DataContext';

const Categories: React.FC = () => {
  const { categories } = useContext(DataContext);

  return (
    <main>
      <div className="container">
        <List
          items={categories}
          renderItem={(category) => (
            <CategoryItem
              key={category.id}
              id={category.id}
              name={category.name}
              categoryId={category.categoryId}
              description={category.description}
            />
          )}
        />
      </div>
    </main>
  );
};

export default Categories;
