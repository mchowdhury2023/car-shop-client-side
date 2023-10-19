import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import { useCart } from '../../authentication/CartProvider';

const Mycart = () => {
  const [cartItems, setCartItems] = useState([]);
  const { cart } = useCart();

  useEffect(() => {
    fetch('http://localhost:5000/cart')
      .then(res => res.json())
      .then(data => setCartItems(data))
      .catch(err => {
        Swal.fire({
          title: 'Error!',
          text: 'Failed to fetch cart items. Please try again later.',
          icon: 'error',
          confirmButtonText: 'OK'
        });
      });
  }, []);

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/cart/${id}`, {
      method: 'DELETE'
    })
    .then(res => res.json())
    .then(data => {
      if (data.deletedCount > 0) {
        const remainingItems = cartItems.filter(item => item._id !== id);
        setCartItems(remainingItems);
        Swal.fire({
          title: 'Deleted!',
          text: 'Product removed from cart successfully.',
          icon: 'success',
          confirmButtonText: 'OK'
        });
      }
    })
    .catch(err => {
      Swal.fire({
        title: 'Error!',
        text: 'Failed to delete the product from cart. Please try again later.',
        icon: 'error',
        confirmButtonText: 'OK'
      });
    });
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Products added to my cart</h2>
      <div className="space-y-4">
        {cartItems.map((product) => (
          <div key={product._id} className="flex items-center justify-between border p-4 rounded bg-white shadow">
            <div className="flex items-center space-x-4">
              <span className="text-lg">{product.brandName} - {product.modelName}</span>
              <span className="text-gray-500">${product.price}</span>
            </div>
            <button onClick={() => handleDelete(product._id)} className="text-red-600 hover:text-red-800">Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Mycart;
