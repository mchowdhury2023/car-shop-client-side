import React from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateProducts = () => {

    const product = useLoaderData();
    const {_id,brandName, modelName, year, type, price, rating, details, photo} = product;

    const handleUpdateProduct = e => {

        e.preventDefault();
    
        const form = e.target;
    
        const brandName = form.brand.value;
        const modelName = form.model.value;
        const year = form.year.value;
        const type = form.type.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const details = form.details.value;
        const photo = form.photo.value;
    
        const newProduct = {brandName, modelName, year, type, price, rating, details, photo};
        console.log(newProduct);


    
       
        fetch(`https://brand-shop-server-gztp20rll-mahamudul-chowdhurys-projects.vercel.app/products/${_id}`, {
            method:'PUT',
            headers: {
                'content-type':'application/json'
            },
            body:JSON.stringify(newProduct)
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0){
                // console.log(data);
                Swal.fire({
                    title: 'Success!',
                    text: 'Product updated Successfully',
                    icon: 'success',
                    confirmButtonText: 'OK'
                  })
            }
        })
      }

  return (
    <div className="bg-[#F4F3F0] p-24">
      <h2 className="text-3xl text-center font-extrabold mb-6">Update Products</h2>
      <form onSubmit={handleUpdateProduct}>
        {/* Form Name and Quantity Row */}
        <div className="md:flex mb-2">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Brand Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="brand"
                defaultValue={brandName}
                placeholder="Coffee Name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Model Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="model"
                defaultValue={modelName}
                placeholder="Available Quantity"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* Form Supplier Row */}
        <div className="md:flex mb-2">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Year</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="year"
                defaultValue={year}
                placeholder="Coffee Name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Type</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="type"
                defaultValue={type}
                placeholder="Available Quantity"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* Form Category and Details Row */}
        <div className="md:flex mb-2">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="price"
                defaultValue={price}
                placeholder="Coffee Name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Rating</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="rating"
                defaultValue={rating}
                placeholder="Available Quantity"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>

        {/* Form PhotoURL row */}
        <div className="md:flex mb-10">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="photo"
                defaultValue={photo}
                placeholder="Coffee Name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Details</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="details"
                defaultValue={details}
                placeholder="Available Quantity"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <input
          type="submit"
          value="Update Product"
          className="btn btn-block bg-slate-700 text-white"
        />
      </form>
    </div>
  );
};
export default UpdateProducts;
