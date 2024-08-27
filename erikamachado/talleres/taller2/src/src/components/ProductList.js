import React from 'react';
import ProductItem from './ProductItem';

const ProductList = ({ products, onProductClick }) => {
  return (
    <div>
      <h2>Products</h2>
      <ul>
        {products.map((product) => (
          <ProductItem key={product.id} product={product} onProductClick={onProductClick} />
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
