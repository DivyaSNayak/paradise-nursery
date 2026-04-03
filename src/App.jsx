import React from "react";
import AboutUs from "./AboutUs";
import ProductList from "./ProductList";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Welcome to Paradise Nursery</h1>
      <button>Get Started</button>
      <AboutUs />
      <ProductList />
    </div>
  );
}

export default App;
