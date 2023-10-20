import React from "react";
import Swal from "sweetalert2";

const AddProduct = () => {

  const handleAddProduct = e => {

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
    //console.log(newProduct);

   
    fetch('http://localhost:5000/products', {
        method:'POST',
        headers: {
            'content-type':'application/json'
        },
        body:JSON.stringify(newProduct)
    })
    .then(res => res.json())
    .then(data => {
        if(data.insertedId){
            // console.log(data);
            Swal.fire({
                title: 'Success!',
                text: 'Product added Successfully',
                icon: 'success',
                confirmButtonText: 'OK'
              })
        }
    })
  }

  return (
    <div className="bg-[#F4F3F0] p-24">
      <h2 className="text-3xl text-center font-extrabold mb-6">Add Products</h2>
      <form onSubmit={handleAddProduct}>
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
                placeholder="Brand Name"
                className="input input-bordered w-full"
                required
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
                placeholder="Model Name"
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
                placeholder="Year"
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
                placeholder="Type"
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
                placeholder="Price"
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
                placeholder="Rating"
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
                placeholder="Phone URL"
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
                placeholder="Details"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <input
          type="submit"
          value="Add Product"
          className="btn btn-block bg-slate-700 text-white"
        />
      </form>
    </div>
  );
};

export default AddProduct;
