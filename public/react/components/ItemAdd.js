import React, {useState} from 'react';
import apiURL from '../api';

export const ItemAdd = ({setIsAddingItem, fetchItems}) => {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newItem = {
      title,
      price,
      category,
      description,
    };
    try {
      await fetch(`${apiURL}/items`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          },
        body: JSON.stringify(newItem),
      });
      setIsAddingItem(false);
      fetchItems();
    } catch (err) {
      console.log('Error: ', err);
    }
  };

  return <div className="item-container" id="item-add">
    <h3>Add Item</h3>
    <form className='form-input-list' onSubmit={handleSubmit}>
      <label>Title:</label>
      <input type="text" name="title" value={title} onChange={(ev) => setTitle(ev.target.value)}/>
      <label>Price:</label>
      <input type="number" name="price" value={price} onChange={(ev) => setPrice(ev.target.value)}/>
      <label>Category:</label>
      <input type="text" name="category" value={category} onChange={(ev) => setCategory(ev.target.value)}/>
      <label>Description:</label>
      <textarea name="description" value={description} onChange={(ev) => setDescription(ev.target.value)}/>
      <span className='options-container'>
        <button type="submit">Submit</button>
        <button className='btn-danger' onClick={() => setIsAddingItem(false)}>Cancel</button>
      </span>
    </form>
  </div>
}
	