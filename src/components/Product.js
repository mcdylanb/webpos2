import React from 'react'


const Product = ({ name, rating, price}) => {
  return (
    <ul>
    <li>{name}</li>
      <ul>
        <li>Rating: {rating}</li>
        <li>Price: ${price}</li>
      </ul>
    </ul>
  )
}

export default Product
