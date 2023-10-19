import React, { useState, useEffect } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { useCart } from "../../authentication/CartProvider";

const ProductDetails = () => {
  const product = useLoaderData();
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    const cartItem = {
      brandName: product.brandName,
      modelName: product.modelName,
      price: product.price,
    };

    fetch("http://localhost:5000/cart", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(cartItem),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          addToCart(product);
          Swal.fire({
            title: "Success!",
            text: "Product added to cart successfully",
            icon: "success",
            confirmButtonText: "OK",
          });
        } else {
          throw new Error("Failed to add product to cart");
        }
      })
      .catch((error) => {
        Swal.fire({
          title: "Error!",
          text: "Failed to add product to cart. Please try again later.",
          icon: "error",
          confirmButtonText: "OK",
        });
      });
  };

  return (
    <div className="container mx-auto p-4 flex justify-center items-center min-h-screen">
      <div className="bg-white border border-gray-200 p-6 rounded-lg shadow hover:shadow-md transition-shadow duration-300 w-3/4 mx-auto">
        {" "}
        {/* Added w-3/4 and mx-auto for width and centering */}
        <h2 className="text-2xl font-semibold text-center">
          Details of {product.brandName} {product.modelName}
        </h2>
        <img
          className="w-full h-100 object-cover mb-6 rounded"
          src={product.photo}
          alt={product.modelName}
        />
        <h2 className="text-2xl font-semibold mb-2">
          Brand: {product.brandName}
        </h2>
        <h3 className="text-xl mb-2">Model: {product.modelName}</h3>
        <p className="text-gray-700 mb-4">{product.details}</p>
        <table className="min-w-full bg-white mb-4">
          <tbody>
            <tr className="border-b">
              <td className="py-2 px-4 font-medium">Year:</td>
              <td className="py-2 px-4">{product.year}</td>
            </tr>
            <tr className="border-b">
              <td className="py-2 px-4 font-medium">Type:</td>
              <td className="py-2 px-4">{product.type}</td>
            </tr>
            <tr className="border-b">
              <td className="py-2 px-4 font-medium">Price:</td>
              <td className="py-2 px-4">${product.price}</td>
            </tr>
            <tr className="border-b">
              <td className="py-2 px-4 font-medium">Rating:</td>
              <td className="py-2 px-4">{product.rating}</td>
            </tr>
          </tbody>
        </table>
        <div className="flex justify-center mt-4">
          <button onClick={handleAddToCart} className="btn btn-primary">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
