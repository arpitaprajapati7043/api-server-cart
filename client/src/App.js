import React, { useEffect, useState } from "react";

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://api-cartserver.onrender.com/Products")
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => setProducts(data))
      .catch(error => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="App">
      <h1>Products</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>{product.title}{product.price}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
