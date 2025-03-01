export default function Item(props) {
    const {name, quantity,category } = props;
    return (
    <section className="bg-slate-300 m-2 p-2 rounded-lg">
        <h2 className="font-bond text-l text-purple-500 ">{props.name}</h2>
        <p>Quantity: {props.quantity}</p>
        <p> Category: {props.category}</p>
        </section>
    );
    }