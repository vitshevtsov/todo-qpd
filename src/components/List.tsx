import React from 'react';
import ListItem from './ListItem';

export default function List([...items]) {
  const listItems = items.map((item: any) => (
    <ListItem
      key={item.id}
      title={item.name}
      category={item.categoryId}
      description={item.description}
    />
  ));
  return (
    <div>
      <div>{listItems}</div>
    </div>
  );
}
