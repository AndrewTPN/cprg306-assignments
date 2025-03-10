"use client"

import '../global.css'
import ItemList from './item-list'
import NewItem from './new-item';
import itemsData from "./item.json";
import { useState } from 'react';
const Page = () => {

const [items, setItems] = useState(itemsData)

function generateRandomString(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    
    return result;
  }

const handleAddItem = (item) => {
    let newArray = [...items]
    item.id = generateRandomString(10)
    newArray.push(item)
    setItems(newArray)
}
return (
<main>
    <h1>Shopping List</h1>
    <NewItem onAddItem={handleAddItem}  />
    <ItemList items={items} />
</main>
);
};

export default Page;
