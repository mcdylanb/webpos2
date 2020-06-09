import React from "react";

const Product = ({ name, rating, price }) => {
  return (
    <ul className="item">
      <li className="product-name">{name}</li>
      <ul>
        <li>Rating: {rating}</li>
        <li>Price: ${price}</li>
        <button> BUY </button>
        <button> add to Cart </button>
      </ul>
    </ul>
  );
};

export default Product;
