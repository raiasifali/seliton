import React from 'react';
import Link from 'next/link';
import Product from '../product/product';
import ProductInfo  from "./ProductInfo";
import ProductAdditionalInfo  from "./ProductAdditionalInfo";

const AddProduct = () => {
  return (
    <section className="px-20 py-4 flex flex-col gap-6 bg-gray">
      <header className="">
        <div className=""></div>
        <h1 className="text-[24px] font-bold">Add Product</h1>
      </header>
      <main className='flex gap-4'>
        <ProductInfo />
        <ProductAdditionalInfo />
      </main>
    </section>
  );
};

export default AddProduct;
