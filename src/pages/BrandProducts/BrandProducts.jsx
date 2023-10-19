import React, { useState } from "react";
import Productcard from "../../components/ProductCard/Productcard";
import { useLoaderData } from "react-router-dom";
import { Carousel } from "react-bootstrap";

const BrandProducts = () => {
  const loadedProducts = useLoaderData();
  const [products, setProducts] = useState(loadedProducts)

  // Check if products are available or not
  const areProductsAvailable = products.length > 0;

  return (
    <div className="">
      <h2 className="text-2xl bg-slate-200 font-semibold rounded-md mb-4 text-center">
       Available {areProductsAvailable ? products[0].brandName : "Fetching..."} Cars
      </h2>

      {areProductsAvailable ? (
        <>
          <div>
            <Carousel className="mt-8" pause={false}>
              {products.map((product, index) => (
                <Carousel.Item key={index}>
                  <img
                    className="d-block w-3/4 mx-auto h-96 object-cover mb-10"
                    src={product.photo}
                    alt={product.modelName}
                  />
                  <Carousel.Caption className="bg-black bg-opacity-50 p-3 rounded mb-10">
                    <p className="text-white">{product.modelName}</p>
                    <p className="text-white">A Dream Car On Your Limit</p>
                  </Carousel.Caption>
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mr-16">
            {products.map((product) => (
              <Productcard key={product._id} product={product} products={products} setProducts={setProducts}></Productcard>
            ))}
          </div>
        </>
      ) : (
        <div className="text-center text-xl mt-4">
          Cars are not available right now...
        </div>
      )}
    </div>
  );
};

export default BrandProducts;

