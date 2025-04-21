"use client"

import '../../global.css'
import ItemList from './item-list'
import NewItem from './new-item';
import { useState } from 'react';
import MealIdeas from './meal-ideas';

import { useRouter } from 'next/navigation';

import { useUserAuth } from "../_utils/auth-context";
import { useEffect } from 'react';

import {getItems, addItem} from "../_service/shopping-list-service"
const Page = () => {

  const router = useRouter();

   const { user, firebaseSignOut} = useUserAuth();
   const handleLogout = async () => {
    await firebaseSignOut();
  }

   const [loading, setLoading] = useState(true)


  const trimString = (text) => {
    return text.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '');

  }

      const [selectedItemName, setSelectedItemName] = useState()
      const [items, setItems] = useState()

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
 
    // item.id = generateRandomString(10)
    // newArray.push(item)
    // setItems(newArray)
    addItem(user.uid,item )
    loadItems(user.uid)

    
}

const loadItems = async (userId) => {
  try {
    const fetchedItems = await getItems(userId);
    setItems(fetchedItems || []);
  } catch (error) {
    console.log("Error loading items:", error);
  }
};

useEffect(() => {
  if (user) {
    
    setLoading(false)
    loadItems(user.uid)
  } else if (!user && loading == false) {
    router.push('/week-10');

   
  }
  
}, [user, router, loading]);


if (!user) {
  return <div>Loading...</div>; 
}


  return (
    <main>
        <h1>Shopping List</h1>
        <button className='border p-1 bg-red-700 text-white' onClick={handleLogout}>log out</button>
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
