import React, { useState, useEffect } from 'react';
import { ItemSingle } from './ItemSingle';
import { ItemsList } from './ItemsList';

// import and prepend the api url to any fetch calls
import apiURL from '../api';
import { ItemAdd } from './ItemAdd';

export const App = () => {

	const [items, setItems] = useState([]);
	const [selectedItem, setSelectedItem] = useState(null);
	const [isAddingItem, setIsAddingItem] = useState(false);

	async function fetchItems(){
		try {
			const response = await fetch(`${apiURL}/items`);
			const itemsData = await response.json();
			
			setItems(itemsData);
		} catch (err) {
			console.log("Oh no an error! ", err)
		}
	}

	useEffect(() => {
		fetchItems();
	}, []);

	return (
		<main>	
      <h1>Better Buys</h1>
			<h2>All things are Better at Better Buys</h2>
			<button onClick={() => setIsAddingItem(true)}>Add Item</button>
			{ isAddingItem && <ItemAdd setIsAddingItem={setIsAddingItem} fetchItems={fetchItems} /> }
			{
				selectedItem
					? <ItemSingle item={selectedItem} setSelectedItem={setSelectedItem} />
					: <ItemsList items={items} setSelectedItem={setSelectedItem} />
			}
		</main>
	)
}