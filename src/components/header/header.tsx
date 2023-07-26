import React from 'react';
import Link from 'next/link';
import Product from '../product/product'
import AddProduct from '@/components/shopify/AddProduct'
const Header = () => {
  return (
    <div>
      <header className="bg-gray-50 max-w-screen-xl bg-gray-100">
        <div className="mx-auto max-w-screen-xl px-4 py-2 sm:px-6 lg:px-8 bg-white">
          <div className="mt-2">
            <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
              Welcome Seliton
            </h1>
          </div>
        </div>
      </header>
      {/*<Product/>*/}
      <AddProduct />
    </div>
  );
};

export default Header;
