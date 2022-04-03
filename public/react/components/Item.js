import React from 'react';

export const Item = ({item, setSelectedItem, children}) => {

  return <div class="item-container">
    <h3>{item.title}</h3>
    <p class="price-box">
      <div>${item.price}</div>
      <button class="detail-button" onClick={() => setSelectedItem(children ? null : item)}>{children ? 'Back to Items' : 'Details'}</button>
    </p>
    {children}
    <img src={item.image} alt={item.title} />
  </div>
}
	