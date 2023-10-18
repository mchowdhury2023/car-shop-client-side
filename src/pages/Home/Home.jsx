import React, { useEffect, useState } from "react";
import Banner from "../../components/Banner/Banner";
import BrandCard from "../../components/BrandCard/BrandCard";
import { Carousel } from "react-bootstrap";

const Home = () => {
  const [brands, setBrands] = useState([]);
  const [featuredProducts, setFeaturedProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/brands")
      .then((res) => res.json())
      .then((data) => setBrands(data));
  }, []);

  useEffect(() => {
    fetch("http://localhost:5000/products?limit=5")
      .then((res) => res.json())
      .then((data) => setFeaturedProducts(data));
  }, []);

  return (
    <div>
      <Banner brands={brands}></Banner>

      <div className="mt-10">
        <h2 className="text-2xl bg-slate-200 font-semibold rounded-md mb-4 text-center">
          Brands:
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {brands.map((brand) => (
          <BrandCard
            key={brand._id}
            brandName={brand._id}
            photo={brand.photo}
          ></BrandCard>
        ))}
      </div>
      <div>
        <h2 className="text-5xl text-center mt-10">Our Top Picks For You</h2>
      </div>

      <Carousel className="mt-8" pause={false}>
        {featuredProducts.map((product, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-3/4 mx-auto h-96 object-cover mb-10"
              src={product.photo}
              alt={product.modelName}
            />
            <Carousel.Caption className="bg-black bg-opacity-50 p-3 rounded mb-10">
              <h3 className="text-white">{product.brandName}</h3>
              <p className="text-white">{product.modelName}</p>
              <p className="text-white">{product.year}</p>
              <p className="text-white">${product.price}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default Home;
