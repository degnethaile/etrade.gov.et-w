// components/HomePage.js
import React from 'react';

const HomePage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header */}
      <header className="bg-blue-500 text-white p-4 text-center">
        <h1 className="text-2xl font-bold">Ministry of Trade and Regional Integration</h1>
      </header>

      {/* Main Content */}
      <div className="container mx-auto my-8 flex flex-col items-center">
        {/* Card with Image */}
        <div className="max-w-md p-8 bg-white shadow-lg rounded-md mb-8">
          <img
            src="/path/to/your/image.jpg" // replace with the actual path to your image
            alt="Ministry of Trade and Regional Integration"
            className="w-full h-auto rounded-md mb-4"
          />
          <p className="text-gray-600">
            Your image description or any other relevant information can go here.
          </p>
        </div>

        {/* Search Bar */}
        <div className="w-full max-w-md">
          <input
            type="text"
            placeholder="Search..."
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none"
          />
          <button
            className="mt-2 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
