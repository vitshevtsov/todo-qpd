/* eslint-disable react/destructuring-assignment */
import React from 'react';
import ListItem from './ListItem';
import IListItem, { IListProps } from '../types/data';

export default function List(props: IListProps) {
  const listItems = props.items.map((item: IListItem) => (
    <ListItem
      key={item.id}
      id={item.id}
      name={item.name}
      categoryId={item.categoryId}
      description={item.description}
    />
  ));
  return (
    <div>
      <div>{listItems}</div>
    </div>
  );
}
