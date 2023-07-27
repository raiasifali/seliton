'use client';

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import 'react-quill/dist/quill.snow.css';
import Select from 'react-select';
import Modal from '../modals';
import dynamic from 'next/dynamic';
const ReactQuill = dynamic(import('react-quill'), { ssr: false });

const ProductInfo = () => {
  const [value, setValue] = useState('');
  const [showProduct, setShowProduct] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState('');
  const [modalBody, setModalBody] = useState(<></>);

  function handleClose() {
    setShow(false);
  }

  function handleEditLocationClick() {
    setShow(true);
    setModalBody(<EditLocation />);
    setTitle('Edit locations');
  }

  function handleVariantClick() {
    setShow(true);
    setModalBody(<EditVariant />);
    setTitle('Edit 2');
  }

  return (
    <div className="grow-[1] flex flex-col gap-6">
      <div className="flex-1 border border-1 bg-white p-4 rounded-xl">
        <div className="flex flex-col py-2">
          <label className="mb-1">Title</label>
          <input
            type="text"
            placeholder="Short Sleev t-shirt"
            className="border border-1 p-2 rounded-xl"
          />
        </div>
        <div className="flex flex-col flex-1 w-full">
          <label className="mb-1">Discription</label>
          <ReactQuill theme="snow" value={value} onChange={setValue} />
        </div>
      </div>
      <div className="flex-1 border bg-white p-4 rounded-xl">
        <div className="flex flex-col py-2">
          <label className="mb-1">Media</label>
          <div className="flex flex-col gap-2 border-dotted border-2 border-gray-400 rounded-lg justify-center items-center h-[200px] hover:bg-gray-100">
            <div className="flex gap-2">
              <input type="file" className="w-[100px]" />
              <a href="#" className="hover:decoration-solid">
                Add from URL
              </a>
            </div>
            <small className="text-gray-600">
              Accept images, videos, or 3D models
            </small>
          </div>
        </div>
      </div>
      <div className="flex flex-col flex-1 border border-1 bg-white p-4 rounded-xl">
        <h3>Pricing</h3>
        <div className="flex gap-6">
          <div className="flex flex-col py-2">
            <label className="mb-1 text-gray-600 font-light">Price</label>
            <input
              type="text"
              placeholder="RS     0.000"
              className="border border-1 border-gray-500 p-2 rounded-lg h-[30px]"
            />
          </div>
          <div className="flex flex-col py-2">
            <label className="mb-1 text-gray-600 font-light">
              Compare-at price
            </label>
            <input
              type="text"
              placeholder="RS     0.000"
              className="border border-1 border-gray-500 p-2 = rounded-lg h-[30px]"
            />
          </div>
        </div>
        <div className="flex items-center gap-4 py-2">
          <input type="checkbox" />
          <label className="mb-1 text-gray-600 font-light">
            Compare-at price
          </label>
        </div>
        <div className="flex gap-6">
          <div className="flex flex-col py-2">
            <label className="mb-1 text-gray-600 font-light">Price</label>
            <input
              type="text"
              placeholder="RS     0.000"
              className="border border-1 border-gray-500 p-2 rounded-lg h-[30px]"
            />
          </div>
          <div className="flex flex-col py-2">
            <label className="mb-1 text-gray-600 font-light">
              Compare-at price
            </label>
            <input
              type="text"
              placeholder="RS     0.000"
              className="border border-1 border-gray-500 p-2 = rounded-lg h-[30px]"
            />
          </div>
          <div className="flex flex-col py-2">
            <label className="mb-1 text-gray-600 font-light">
              Compare-at price
            </label>
            <input
              type="text"
              placeholder="RS     0.000"
              className="border border-1 border-gray-500 p-2 rounded-lg h-[30px]"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col flex-1 border border-1 bg-white p-4 rounded-xl">
        <div>
          <h3 className="">Inventory</h3>
          <div className="flex items-center gap-4 py-6">
            <input type="checkbox" />
            <label className="mb-1 text-gray-600 font-light">
              Track quantity
            </label>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex justify-between border-b border-gray-400">
            <h3 className="">Quantity</h3>
            <button
              className="px-4 py-2 text-blue-600"
              onClick={handleEditLocationClick}
            >
              Edit location
            </button>
          </div>
          <div className="flex justify-between">
            <small>Shop Location</small>
            <input type="number" className="border px-2 w-[60px] rounded-sm" />
          </div>
          <div className="flex items-center gap-4">
            <input type="checkbox" />
            <label className="mb-1 text-gray-600 font-light">
              Continue selling when out of stock
            </label>
          </div>
          <div className="flex items-center gap-4">
            <input type="checkbox" />
            <label className="mb-1 text-gray-600 font-light">
              This product has a SKU or barcode
            </label>
          </div>
        </div>
      </div>
      <div className="flex flex-col flex-1 border border-1 bg-white p-4 rounded-xl">
        <h3>Shipping</h3>
        <div className="flex items-center gap-4">
          <input type="checkbox" />
          <label className="mb-1 text-gray-600 font-light">
            This product has a SKU or barcode
          </label>
        </div>
        <div className="flex flex-col py-2 border-b pb-4">
          <label className="mb-1 text-gray-600 font-light">Weigth</label>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="0.0"
              className="border border-1 border-gray-400 p-2 rounded-lg h-[30px]"
            />
            <select
              defaultValue="kg"
              className="border border-1 border-gray-400 rounded-lg px-2"
            >
              <option value="kg">kg</option>
              <option value="g">g</option>
              <option value="oz">oz</option>
              <option value="lb">lb</option>
            </select>
          </div>
        </div>
        {showProduct ? (
          <div className="flex flex-col gap-2 mt-4">
            <div>
              <h3 className="font-bold text-gray-800">Customs information</h3>
              <small className="text-gray-500">
                Printed on customs forms or shipping labels for international
                orders.
              </small>
            </div>
            <div className="flex flex-col py-2">
              <label className="mb-1 text-gray-600">
                Country/Region of origin{' '}
              </label>
              <select
                defaultValue="kg"
                className="border border-1 border-gray-400 rounded-lg px-2 h-[35px]"
              >
                <option value="kg">kg</option>
                <option value="g">g</option>
                <option value="oz">oz</option>
                <option value="lb">lb</option>
              </select>
            </div>
            <div className="flex flex-col py-2">
              <label className="mb-1 text-gray-600">
                HS (Harmonized System) code
              </label>
              <input
                type="text"
                placeholder="Search by product key or code"
                className="border border-1 border-gray-400 rounded-lg  h-[35px] px-4"
              />
            </div>
            <small>
              Learn more about{' '}
              <a href="#" className="text-blue-600 hover:underline capitalize">
                add Hs codes
              </a>
            </small>
          </div>
        ) : (
          <button
            className="flex text-start gap-4 items-center mt-4 cursor-pointer"
            onClick={() => setShowProduct((p) => !p)}
          >
            <FontAwesomeIcon icon={faPlus} className="text-blue-600" />
            <label className="text-blue-600 font-light cursor-pointer hover:underline">
              This product has a SKU or barcode
            </label>
          </button>
        )}
      </div>
      <div className="flex flex-col border border-1 bg-white p-4 rounded-xl">
        <h3 className="border-b pb-2">Variants</h3>
        {showProduct && (
          <div className="flex flex-col gap-4 py-4">
            <div className="flex flex-col px-8 gap-2">
              <label htmlFor="browser" className="text-gray-600 ">
                Choose your browser from the list
              </label>
              <Select
                className="rounded-lg"
                options={[
                  { value: 'chocolate', label: 'Chocolate' },
                  { value: 'strawberry', label: 'Strawberry' },
                  { value: 'vanilla', label: 'Vanilla' },
                ]}
              />
            </div>
            <div className="flex flex-col px-8 gap-2">
              <label htmlFor="browser" className="text-gray-600 ">
                Choose your browser from the list
              </label>
              <Select
                className="rounded-lg"
                options={[
                  { value: 'chocolate', label: 'Chocolate' },
                  { value: 'strawberry', label: 'Strawberry' },
                  { value: 'vanilla', label: 'Vanilla' },
                ]}
              />
            </div>
            <button className="self-start border border-gray-600 rounded-lg py-1  px-6 ml-8 hover:bg-gray-100">
              Done
            </button>
          </div>
        )}
        <button className="flex text-start gap-4 items-center my-4 cursor-pointer">
          <FontAwesomeIcon icon={faPlus} className="text-blue-600" />
          <label className="text-blue-600 font-light cursor-pointer hover:underline">
            {showProduct
              ? 'Add another option'
              : 'Add options like size or color'}
          </label>
        </button>
        <div className="borer border-gray-600">
          <div className="flex flex-col gap-2 border-y py-2 border-gray-400">
            <div className="flex gap-3">
              <label className="text-gray-600">Select</label>
              <button className="text-blue-600">All</button>
              <button className="text-blue-600">None</button>
              <select defaultValue="color" className="text-blue-800">
                <option value="color">Color</option>
              </select>
            </div>
            <div className="flex gap-2">
              <label className="text-gray-600">Avaiable Inventory At:</label>
              <select defaultValue="location" className="text-blue-800">
                <option value="location">All Location</option>
              </select>
            </div>
          </div>
          <div className="border-b border-gray-400">
            <div className="flex gap-4 justify-between py-4">
              <div className="flex gap-2">
                <input type="checkbox" />
                <label>Showing one variant</label>
              </div>
              <select
                defaultValue="edit"
                className="w-[70px] border border-gray-400 rounded-md px-2 py-[.5px]"
              >
                <option value="edit">Edit</option>
              </select>
            </div>
          </div>
          <div className="border-b border-gray-400">
            <div
              className="flex gap-4 justify-between items-center py-4"
              onClick={handleVariantClick}
            >
              <div className="flex gap-2">
                <input type="checkbox" />
                <label>2</label>
              </div>
              <div className="flex flex-col gap-1 items-end">
                <label>Rs 0.00</label>
                <label>0 available at 3 locations</label>
              </div>
            </div>
          </div>
          <div>
            <div className="py-4">
              <div className="flex gap-2 justify-between">
                <label>Showing one variant</label>
                <label>0 available</label>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="border border-gray-400 p-6 rounded-md shadow-lg">
            <select
              defaultValue="action"
              className="border border-gray-600 rounded-md p-2 hover:bg-gray-100"
            >
              <option value="action">Actions</option>
            </select>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2 border border-1 bg-white p-4 rounded-xl">
        <div className="flex justify-between pb-1">
          <h3>Search engine listing</h3>
          <button
            className="text-blue-600"
            onClick={() => setIsEdit((p) => !p)}
          >
            Edit
          </button>
        </div>
        <small className="font-light text-[14px]">
          Add a title and description to see how this product might appear in a
          search engine listing
        </small>
        {isEdit && (
          <div className="flex flex-col gap-2">
            <div className="flex flex-col gap-1">
              <label className="text-gray-800">Page title</label>
              <input type="text" className="border rounded-lg h-[35px] px-4" />
              <small className="text-gray-400">0 of 70 characters used</small>
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-gray-800">Meta Description</label>
              <textarea className="h-[100px] border rounded-lg p-2" />
              <small className="text-gray-400">0 of 150 characters used</small>
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-gray-800">URL handle</label>
              <input
                type="text"
                className="border rounded-lg h-[35px] px-4"
                placeholder="https://storestack1.myshopify.com/prodcts/"
              />
            </div>
          </div>
        )}
      </div>
      <Modal show={show} onClose={handleClose} title={title}>
        {modalBody}
      </Modal>
    </div>
  );
};

export default ProductInfo;

function EditLocation() {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-gray-600">
        Select locations that stock the selected variants.
      </label>
      <div className="flex justify-between">
        <button className="text-blue-600">Deselect All</button>
        <small className="text-gray-600">3 of 3 selected</small>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex gap-2">
          <input type="checkbox" />
          <label>My Custom Location</label>
        </div>
        <div className="flex gap-2">
          <input type="checkbox" />
          <label>Shop Location</label>
        </div>
        <div className="flex gap-2">
          <input type="checkbox" />
          <label>Snow City Warehouse</label>
        </div>
      </div>
    </div>
  );
}

function EditVariant() {
  return (
    <div>
      <div className="flex gap-3 items-center border-b border-gray-300 py-4">
        <input type="checkbox" />
        <label> Create this variant</label>
      </div>
      <div className="flex  flex-col gap-3 justify-center border-b border-gray-300 py-4">
        <div>
          <div className="flex flex-col gap-2">
            <label>Price</label>
            <input
              type="text"
              placeholder="RS    0.00"
              className="border border-gray-400 px-2 h-[35px] rounded-lg w-[200px]"
            />
          </div>
        </div>
        <div className="flex gap-3">
          <div className="flex flex-col gap-2">
            <label>Cost per item</label>
            <input
              type="text"
              placeholder="RS    0.00"
              className="border border-gray-400 px-2 h-[35px] rounded-lg"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label>Profit</label>
            <input
              type="text"
              placeholder="RS    0.00"
              className="border border-gray-400 px-2 h-[35px] rounded-lg"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label>Margin</label>
            <input
              type="text"
              placeholder="RS    0.00"
              className="border border-gray-400 px-2 h-[35px] rounded-lg"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3 justify-center border-b border-gray-300 py-4">
        <h3>Inventory</h3>
        <div className="flex gap-4">
          <div className="flex flex-col gap-2">
            <label>SKU (Stock Keeping Unit)</label>
            <input
              type="text"
              placeholder="RS    0.00"
              className="border border-gray-400 px-2 h-[35px] rounded-lg grow-[1]"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label>Barcode (ISBN, UPC, GTIN, etc.)</label>
            <input
              type="text"
              placeholder="RS    0.00"
              className="border border-gray-400 px-2 h-[35px] rounded-lg"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3 justify-center border-b border-gray-300 py-4">
        <div>
          <h3 className="font-bold text-gray-800">Customs information</h3>
          <small className="text-gray-500">
            Printed on customs forms or shipping labels for international
            orders.
          </small>
        </div>
        <div className="flex flex-col py-2">
          <label className="mb-1 text-gray-600">
            HS (Harmonized System) code
          </label>
          <input
            type="text"
            placeholder="Search by HS code"
            className="border border-1 border-gray-400 rounded-lg  h-[35px] px-4"
          />
        </div>
        <small className="mt-[-10px]">
          Manually enter codes that are longer than 6 numbers.
        </small>
      </div>
      <div className="flex flex-col gap-3 justify-center border-b border-gray-300 py-4">
        <small>Save the product to edit more variant details.</small>
      </div>
    </div>
  );
}
