export default function Item({ name, quantity, category }) {
    return (
      <div>
        <h1>{name}</h1>
        <p>Quantity: {quantity}</p>
        <p>Category: {category}</p>
      </div>
    );
  }
  