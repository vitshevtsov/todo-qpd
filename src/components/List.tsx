/* eslint-disable react/destructuring-assignment */
import React from 'react';
import ListItem from './ListItem';
// import IListItem from '../types/data';

export default function List(props: any) {
  // todo ошибка ниже
  // (items => ...items)
  // eslint-disable-next-line react/destructuring-assignment
  const listItems = props.items.map((item: any) => (
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
