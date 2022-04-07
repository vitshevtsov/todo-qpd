/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { IListProps } from '../types/data';

export default function List(props: IListProps) {
  const listItems = props.items.map((item: any) => props.renderItem(item));
  return (
    <div>
      <div>{listItems}</div>
    </div>
  );
}
