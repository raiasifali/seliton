import React from 'react';

const ProductCard = () => {
  return (
    <section className="px-1 py-2 sm:px-6 lg:px-6">
      <div className="flex justify-between rounded bg-white p-2 pl-3">
        <div className="flex flex-col">
          <div className="flex items-center mb-4">
            <input type="checkbox" className="mr-2" />
            <img
              src="./images/image_shoes.png"
              alt="Product Image"
              className="w-12 h-12 rounded-full object-cover"
            />
            <label className="ml-4 font-bold">Product Label</label>
          </div>
          <div className="mb-4">
            <select className="block w-full rounded bg-gray-100 focus:outline-none focus:ring focus:border-blue-300">
              <option value="">Visibility</option>
              <option value="public">Public</option>
              <option value="private">Private</option>
            </select>
          </div>
        </div>

        <div className="flex flex-col justify-end">
          <div className="mt-2 items-center justify-end mb-4">
            <span className="">104.48лв.</span>
          </div>
          <button className="bg-blue-500 text-white px-4 rounded hover:bg-green-600">
            View Details
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductCard;
