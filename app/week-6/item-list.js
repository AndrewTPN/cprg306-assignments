import Item from './item'; // Make sure to import your Item component

// Define your items here
const item1 = { name: "milk, 4 L 🥛", quantity: 1, category: "dairy" };
const item2 = { name: "bread 🍞", quantity: 2, category: "bakery" };
const item3 = { name: "eggs, dozen 🥚", quantity: 2, category: "dairy" };
const item4 = { name: "bananas 🍌", quantity: 6, category: "produce" };
const item5 = { name: "broccoli 🥦", quantity: 3, category: "produce" };
const item6 = { name: "chicken breasts, 1 kg 🍗", quantity: 1, category: "meat" };
const item7 = { name: "pasta sauce 🍝", quantity: 3, category: "canned goods" };
const item8 = { name: "spaghetti, 454 g 🍝", quantity: 2, category: "dry goods" };
const item9 = { name: "toilet paper, 12 pack 🧻", quantity: 1, category: "household" };
const item10 = { name: "paper towels, 6 pack", quantity: 1, category: "household" };
const item11 = { name: "dish soap 🍽️", quantity: 1, category: "household" };
const item12 = { name: "hand soap 🧼", quantity: 4, category: "household" };

const ItemList = () => {

    // Render each item
    const renderItem = (item) => (
    <Item name={item.name} quantity={item.quantity} category={item.category} />
    );

return (
<div className="grid grid-cols-1 gap-4 width-full md:grid-cols-2 lg:grid-cols-3">
    {renderItem(item1)}
    {renderItem(item2)}
    {renderItem(item3)}
    {renderItem(item4)}
    {renderItem(item5)}
    {renderItem(item6)}
    {renderItem(item7)}
    {renderItem(item8)}
    {renderItem(item9)}
    {renderItem(item10)}
    {renderItem(item11)}
    {renderItem(item12)}
</div>
);
};

export default ItemList;
