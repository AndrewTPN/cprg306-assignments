"use client";

import React, { useEffect, useState } from "react";
import Item from "./item";
import itemsData from "./item.json";

const ItemList = () => {

    const [sortBy, setSortBy] = useState("name")
    const [items, setItems] = useState(itemsData);

    const sorting = () => {
        let sortedItems = [...items];
        if (sortBy === "name") {
            sortedItems.sort((a,b) => a.name.localeCompare(b.name))

        }

        if (sortBy === "category") {
            sortedItems.sort((a,b) => a.category.localeCompare(b.category))

        }
        setItems(sortedItems); 
    }

const handleName = () => {
setSortBy("name")
}

const handleCategory = () => {
setSortBy("category")
}

useEffect(() => {
sorting()
},[sortBy])



    // Render each item
    const renderItem = (item) => (
        <Item 
            key={item.id} 
            name={item.name} 
            quantity={item.quantity} 
            category={item.category} 
        />
    );

    return (
        <div className="grid grid-cols-1 gap-4 width-full md:grid-cols-2 lg:grid-cols-3">
            <button onClick = {handleName}>Name</button>
            <button onClick = {handleCategory}>Category</button>

            {items.map(renderItem)}
        </div>
    );
};

export default ItemList;