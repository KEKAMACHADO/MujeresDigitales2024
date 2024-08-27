import React from 'react';

const ProductItem = ({ product, onProductClick }) => {
  return (
    <li onClick={() => onProductClick(product)}>
      <h3>{product.name}</h3>
      <p>${product.price}</p>
    </li>
  );
};

export default ProductItem;
