import React, { useState, useEffect } from 'react';

const Banner = ({ brands }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const next = (currentIndex + 1) % brands.length;
    const id = setTimeout(() => setCurrentIndex(next), 3000);
    return () => clearTimeout(id);
  }, [currentIndex, brands.length]);

  return (
    <div className="relative h-[500px]">
      {/* This is the overlay with the search bar */}
      <div className="absolute z-10 w-full h-full flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-white text-4xl mb-4">Explore Our Exclusive Car Collection</h2>
          <input
            type="text"
            placeholder="Search your dream car..."
            onChange={(e) => setSearch(e.target.value)}
            className="p-2 rounded bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 opacity-60"
          />
        </div>
      </div>
  
      {/* These are the images */}
      {brands.map((brand, index) => (
        <img
          key={brand._id}
          src={brand.photo}
          alt={brand._id}
          className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
        />
      ))}
    </div>
  );
  
}

export default Banner;
