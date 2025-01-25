import ItemList from './item-list'; // Ensure the path is correct

const Page = () => {
return (
<main className="bg-gray-50 min-h-screen flex flex-col items-center p-8">
    <h1 className="text-3xl font-semibold text-blue-600 mb-8">Shopping List</h1>
    <ItemList />
</main>
);
};

export default Page;
