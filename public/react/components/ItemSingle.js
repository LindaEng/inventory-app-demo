import React from 'react';
import { Item } from './Item';

export const ItemSingle = ({item, setSelectedItem}) => {

  return <Item item={item} setSelectedItem={setSelectedItem}>
    <h3>Category: {item.category}</h3>
    <div>{item.description}</div>
  </Item>
}
	