// src/pages/AllProducts.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AllProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/products')
      .then(res => setProducts(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>All Products</h2>
      <ul>
        {products.map(prod => (
          <li key={prod.id}>
            <strong>{prod.name}</strong> - Rs. {prod.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllProducts;
