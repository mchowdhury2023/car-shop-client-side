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
      <div className="absolute w-full h-full bg-opacity-40 bg-black flex items-center justify-center">
        <input
          type="text"
          placeholder="Search for brands..."
          onChange={(e) => setSearch(e.target.value)}
          className="p-2 rounded bg-white focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
      </div>

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
