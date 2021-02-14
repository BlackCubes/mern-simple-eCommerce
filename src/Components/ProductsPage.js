import React from 'react';
import { Link } from 'react-router-dom';

import { useCartContext } from '../context/CartContext';
import { useProductContext } from '../context/ProductContext';

const ProductsPage = () => {
  const { addProduct } = useCartContext();
  const { products } = useProductContext();

  return (
    <div className="product--wrapper">
      {!products ? (
        <div>Hello!</div>
      ) : (
        products.map((prop, key) => (
          <div key={prop.id} className="product">
            <div className="product__title">
              <Link to={`/products/${prop.id}`}>{prop.title}</Link>
            </div>

            <div
              className="product__price"
              onClick={() => addProduct(products[key])}
              onKeyDown={() => addProduct(products[key])}
              role="presentation"
            >
              {prop.price}
            </div>

            <div className="product__image">
              <Link to={`/products/${prop.id}`}>
                <img src={prop.image} alt={prop.title} />
              </Link>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default ProductsPage;
