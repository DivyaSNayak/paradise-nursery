import React, { useState } from "react";

export default function ProductList() {
  const plants = [
    { id: 1, name: "Monstera", price: 20 },
    { id: 2, name: "Fiddle Leaf Fig", price: 25 },
    { id: 3, name: "Snake Plant", price: 15 },
    { id: 4, name: "Aloe Vera", price: 10 },
    { id: 5, name: "Peace Lily", price: 18 },
    { id: 6, name: "Spider Plant", price: 12 },
  ];

  const [cart, setCart] = useState([]);

  const addToCart = (plant) => {
    setCart([...cart, plant]);
  };

  return (
    <div>
      <h2>Our Plants</h2>
      {plants.map((plant) => (
        <div key={plant.id}>
          <p>{plant.name} - ${plant.price}</p>
          <button onClick={() => addToCart(plant)}>Add to Cart</button>
        </div>
      ))}
      <p>Total items in cart: {cart.length}</p>
    </div>
  );
}