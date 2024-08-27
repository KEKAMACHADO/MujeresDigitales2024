import React, { useState } from 'react';
import ProductList from './ProductList';
import ProductDetails from './ProductDetails';
import Cart from './Cart';
import productsData from '../data/products';

const App = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cart, setCart] = useState([]);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div>
      <h1>My Shop</h1>
      <div className="container">
        <ProductList products={productsData} onProductClick={handleProductClick} />
        {selectedProduct && (
          <ProductDetails product={selectedProduct} addToCart={addToCart} />
        )}
        <Cart cart={cart} />
      </div>
    </div>
  );
};

export default App;
