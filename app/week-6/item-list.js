"use client";

import React, { useState } from "react";
import Item from "./item";
import itemsData from "./item.json";

const ItemList = () => {
    const [items] = useState(itemsData);

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
            {items.map(renderItem)}
        </div>
    );
};

export default ItemList;
