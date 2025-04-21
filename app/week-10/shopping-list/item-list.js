"use client";

import React, { useEffect, useState } from "react";
import Item from "./item";

const ItemList = ({items,onItemSelect }) => {

    const [copyItems, setCopyItems] = useState(items || [])

    const [sortBy, setSortBy] = useState("name")
    const sorting = () => {
        if(items!== undefined && items.length > 0) {
            let sortedItems = [...(items || [])];
            if (sortBy === "name") {
                sortedItems.sort((a,b) => a.name.localeCompare(b.name))
            }
    
            if (sortBy === "category") {
                sortedItems.sort((a,b) => a.category.localeCompare(b.category))
    
            }
            setCopyItems(sortedItems); 
        }
        
    }

   const handleName = () => {
    setSortBy("name")
   }

   const handleCategory = () => {
    setSortBy("category")

   }

   useEffect(() => {
    sorting()
   },[sortBy, items])



    // Render each item
    const renderItem = (item) => (
        <Item 
            key={item.id} 
            name={item.name} 
            quantity={item.quantity} 
            category={item.category} 
            onSelect={onItemSelect}
        />
    );

    return (
        <div>
            <h2>Sort By:</h2>
            <div className="flex gap-20 p-1 ">
                <button className="bg-slate-300 m-2 p-2 rounded-lg" onClick = {handleName}>Name</button>
                <button className="bg-slate-300 m-2 p-2 rounded-lg" onClick = {handleCategory}>Category</button>
            </div>
            
            <div className="grid grid-cols-1 gap-4 width-full md:grid-cols-2 lg:grid-cols-3">
    
            {copyItems.map(renderItem)}
        </div>
        </div>
       
    );
};

export default ItemList;
