"use client"

import '../global.css'
import ItemList from './item-list'
import NewItem from './new-item';
import itemsData from "./item.json";
import { useState } from 'react';
import MealIdeas from './meal-ideas';
const Page = () => {

  const trimString = (text) => {
    return text.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '');

  }

      const [selectedItemName, setSelectedItemName] = useState()
      const [items, setItems] = useState(itemsData)

      const handleItemSelect = (e) => {
        let ingredient = trimString(e.currentTarget.querySelector('h2').innerText)
        setSelectedItemName(ingredient)
      }

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
    <div className='flex'>
      <div>
        <NewItem onAddItem={handleAddItem}  />
        <ItemList items={items} onItemSelect={handleItemSelect} />
      </div>
      

      <MealIdeas ingredient={selectedItemName} />
    </div>
   
    
    
</main>
);
};

export default Page;
