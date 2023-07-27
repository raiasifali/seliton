import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faUpload, faSearch, faFilter } from '@fortawesome/free-solid-svg-icons';
import ProductCard from './ProductCard'
const Product = () => {
  return (
    <>
      <section className="mx-auto max-w-screen-xl px-1 py-2 sm:px-6 lg:px-6 flex flex-row items-center">
        <h1 className="text-xl font-bold text-gray-900">Product</h1>

        <a className="group relative inline-flex items-center overflow-hidden rounded border border-current px-8 py-2 text-indigo-600 ml-auto focus:outline-none focus:ring active:text-indigo-500" href="/download">
          <span className="pr-2">
            <FontAwesomeIcon icon={faUpload} />
          </span>
          <span className="text-sm font-medium transition-all group-hover:me-4">Import</span>
        </a>

        <a className="group relative inline-flex items-center overflow-hidden rounded bg-indigo-600 px-8 py-2 text-white ml-4 focus:outline-none focus:ring active:bg-indigo-500" href="/download">
          <span className="pr-2">
            <FontAwesomeIcon icon={faPlus} />
          </span>
          <span className="text-sm font-medium transition-all group-hover:me-4">Add New Product</span>
        </a>
      </section>

      <section className="px-1 sm:px-6 lg:px-6">
        <div className="flex justify-left">
          <button className="px-4 py-2 border-b-2 border-transparent text-gray-500 hover:text-blue-500 hover:border-blue-500 focus:outline-none">
            New Product
            <span className="inline-block w-8 h-8 bg-blue-500 text-white rounded-full text-center ml-2 text-sm leading-8">410</span>
          </button>
          <button className="px-4 py-2 border-b-2 border-transparent text-gray-500 hover:text-blue-500 hover:border-blue-500 focus:outline-none">
            Recorded Products
            <span className="inline-block w-8 h-8 bg-lime-500  text-white rounded-2xl text-center ml-2 text-sm leading-8">36</span>
          </button>
        </div>
      </section>

      <section className="px-1 sm:px-6 lg:px-6">
        <div className="flex justify-left bg-white py-3 rounded-bl rounded-br">
          <div className="ml-4 flex items-center bg-white rounded border bg-gray-100">
            <button className="pl-2 bg-white rounded-full focus:outline-none">
              <FontAwesomeIcon icon={faSearch} />
            </button>
            <input
              type="text"
              className="flex-1 p-2 rounded-full focus:outline-none"
              placeholder="Search..."
            />
          </div>

          <button className="ml-3 px-4 py-2 border bg-white text-gray-500 rounded flex items-center focus:outline-none">
            <FontAwesomeIcon icon={faFilter} className="mr-2" />
            Filters
          </button>
        </div>
      </section>
      <section className="px-1 sm:px-6 lg:px-6">
        <div className="flex justify-left py-3">
          <label className="block text-gray-700 text-sm font-bold mb-2 ml-4">
            <input type="checkbox" className="mr-2" />
            Select All
          </label>
        </div>
      </section>
      <ProductCard/>
    </>
  );
};

export default Product;
