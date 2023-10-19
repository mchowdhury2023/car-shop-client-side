import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { useCart } from "../../authentication/CartProvider";

const Productcard = ({ product, products, setProducts }) => {
  const { addToCart } = useCart();
  const {
    _id,
    brandName,
    modelName,
    year,
    type,
    price,
    rating,
    details,
    photo,
  } = product;

  const handleDlete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/products/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire(
                "Deleted!",
                "Your product has been deleted.",
                "success"
              );
              const remaining = products.filter((prod) => prod._id !== _id);
              setProducts(remaining);
            }
          });
      }
    });
  };

  const handleAddToCart = () => {
    addToCart(product);

    Swal.fire({
      title: "Success!",
      text: "Product added to cart successfully",
      icon: "success",
      confirmButtonText: "OK",
    });
  };

  return (
    <div className="p-4 w-full ml-10 mr-10">
      <div className="bg-white border border-gray-200 p-4 rounded-lg shadow hover:shadow-md transition-shadow duration-300 h-auto md:h-[600px] overflow-hidden">
        <img
          className="w-full h-48 object-cover mb-4 rounded"
          src={photo}
          alt={modelName}
        />
        <h2 className="text-xl font-semibold mb-2 truncate">
          Brand: {brandName}
        </h2>
        <h3 className="text-lg mb-2 truncate">Model: {modelName}</h3>
        <p className="text-gray-600 mb-4 overflow-ellipsis overflow-hidden h-20">
          {details}
        </p>
        <ul className="mb-4 space-y-2">
          <li className="truncate">Year: {year}</li>
          <li className="truncate">Type: {type}</li>
          <li className="truncate">Price: ${price}</li>
          <li className="truncate">Rating: {rating}</li>
        </ul>
        <div className="flex justify-between items-center mt-auto">
        <Link to={`/productDetails/${_id}`} className="btn btn-primary">
                Details
              </Link>

          <div className="space-x-2">
            <Link to={`/updateProduct/${_id}`}>
              <button className="btn btn-success">Edit</button>
            </Link>
        
            <button onClick={() => handleDlete(_id)} className="btn btn-danger">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Productcard;
