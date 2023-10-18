import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-gray-600 mb-8">Page Not Found</h2>
      <p className="text-gray-500 mb-6">Sorry, the page you're looking for doesn't exist.</p>
      <Link 
        to="/" 
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-full"
      >
        Go Home
      </Link>
    </div>
  );
}

export default PageNotFound;
