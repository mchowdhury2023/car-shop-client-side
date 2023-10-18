import React, { useEffect, useState } from 'react'
import Banner from '../../components/Banner/Banner'
import { useLoaderData } from 'react-router-dom'
import Productcard from '../../components/ProductCard/Productcard';
import BrandCard from '../../components/BrandCard/BrandCard';

const Home = () => {

    //const loadedProducts = useLoaderData();
    const [brands, setBrands] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/brands")
            .then(res => res.json())
            .then(data => setBrands(data));
    }, []);


    //const [products, setProducts] = useState(loadedProducts);

  return (
    <div>
    <Banner></Banner>
    <div>
        <h2 className="text-2xl bg-slate-200 font-semibold rounded-md mb-4 text-center">
            Brands:
        </h2>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {
            brands.map((brand) => (
                <BrandCard key={brand._id} brandName={brand._id} photo={brand.photo}></BrandCard>
            ))
        }
    </div>
</div>
  )
}

export default Home