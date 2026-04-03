import React from "react";

export default function CartItem({ item, onRemove }) {
  return (
    <div>
      <p>{item.name} - ${item.price}</p>
      <button onClick={() => onRemove(item.id)}>Remove</button>
    </div>
  );
}