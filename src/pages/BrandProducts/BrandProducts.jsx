import React, { useState } from "react";
import Productcard from "../../components/ProductCard/Productcard";
import { useLoaderData } from "react-router-dom";

const BrandProducts = () => {
  const loadedProducts = useLoaderData();
  const [products, setProducts] = useState(loadedProducts)

  return (
    <div className="">
      <h2 className="text-2xl bg-slate-200 font-semibold rounded-md mb-4 text-center">
        Products for Brand:{" "}
        {products.length > 0 ? products[0].brandName : "Fetching..."}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mr-16">
        {products.map((product) => (
          <Productcard key={product._id} product={product} products={products} setProducts= {setProducts}></Productcard>
        ))}
      </div>
    </div>
  );
};

export default BrandProducts;
