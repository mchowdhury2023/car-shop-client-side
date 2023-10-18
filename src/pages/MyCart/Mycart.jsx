import React from 'react'
import { useCart } from '../../authentication/CartProvider'


const Mycart = () => {
  const { cart } = useCart();
  return (
    <div>
    <h2>Products added to my cart</h2>
    <ul>
      {cart.map((product) => (
        <li key={product._id}>{product.brandName} - {product.modelName}</li>
      ))}
    </ul>
  </div>
  )
}

export default Mycart