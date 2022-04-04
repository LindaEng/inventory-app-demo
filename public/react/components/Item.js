import React from 'react';

export const Item = ({item, setSelectedItem, children}) => {

  return <div className="item-container">
    <h3>{item.title}</h3>
    <div className="price-box">
      <div>${item.price}</div>
      <button className="detail-button" onClick={() => setSelectedItem(children ? null : item)}>{children ? 'Back to Items' : 'Details'}</button>
    </div>
    {children}
    <img src={item.image} alt={item.title} />
  </div>
}
	