export default function Item(props) {
const { name, quantity, category, onSelect } = props

return (
    <li onClick={onSelect} className="bg-slate-300 m-2 p-2 rounded-lg list-none">
        <h2 className="font-bold text-l text-purple-500">{name}</h2>
        <p>Quantity: {quantity}</p>
        <p>Category: {category}</p>
    </li>
)
}

