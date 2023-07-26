import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const ProductInfo = () => {
  return (
      <div className="grow-[1] flex flex-col gap-6">
        <div className="flex-1 border border-1 bg-white p-4 rounded-xl">
          <div className="flex flex-col py-2">
            <label className="mb-1">Title</label>
            <input type="text" placeholder="Short Sleev t-shirt" className="border border-1 p-2 rounded-xl" />
          </div>
          <div className="flex flex-col flex-1 w-full
          ">
            <label className="mb-1">Discription</label>
            <textarea type='text'  className="w-full border border-1 h-[200px] rounded-xl" />
          </div>
        </div>
        <div className="flex-1 border bg-white p-4 rounded-xl">
          <div className="flex flex-col py-2">
            <label className="mb-1">Media</label>
            <div className="flex flex-col gap-2 border-dotted border-2 border-gray-400 rounded-lg justify-center items-center h-[200px] hover:bg-gray-100">
              <div className="flex gap-2">
                <input type="file" className="w-[100px]"  />
                <a href="#" className="hover:decoration-solid">Add from URL</a>
              </div>
              <small className="text-gray-600"> Accept images, videos, or 3D models</small>
            </div>
          </div>
        </div>
        <div className="flex flex-col flex-1 border border-1 bg-white p-4 rounded-xl">
          <h3>Pricing</h3>
          <div className="flex gap-6">
            <div className="flex flex-col py-2">
              <label className="mb-1 text-gray-600 font-light">Price</label>
              <input type="text" placeholder="RS     0.000" className="border border-1 border-gray-500 p-2 rounded-lg h-[30px]" />
            </div>
            <div className="flex flex-col py-2">
              <label className="mb-1 text-gray-600 font-light">Compare-at price</label>
              <input type="text" placeholder="RS     0.000" className="border border-1 border-gray-500 p-2 = rounded-lg h-[30px]" />
            </div>
          </div>
          <div className="flex items-center gap-4 py-2">
            <input type="checkbox" />
            <label className="mb-1 text-gray-600 font-light">Compare-at price</label>
          </div>
          <div className="flex gap-6">
             <div className="flex flex-col py-2">
              <label className="mb-1 text-gray-600 font-light">Price</label>
              <input type="text" placeholder="RS     0.000" className="border border-1 border-gray-500 p-2 rounded-lg h-[30px]" />
            </div>
            <div className="flex flex-col py-2">
              <label className="mb-1 text-gray-600 font-light">Compare-at price</label>
              <input type="text" placeholder="RS     0.000" className="border border-1 border-gray-500 p-2 = rounded-lg h-[30px]" />
            </div>
            <div className="flex flex-col py-2">
              <label className="mb-1 text-gray-600 font-light">Compare-at price</label>
              <input type="text" placeholder="RS     0.000" className="border border-1 border-gray-500 p-2 rounded-lg h-[30px]" />
            </div>
          </div>
        </div>
        <div className="flex flex-col flex-1 border border-1 bg-white p-4 rounded-xl">
          <div>
            <h3 className="">Inventory</h3>
            <div className="flex items-center gap-4 py-6">
              <input type="checkbox" />
              <label className="mb-1 text-gray-600 font-light">Track quantity</label>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="border-b border-b-2 pb-4">Quantity</h3>
            <div className="flex justify-between">
              <small>Shop Location</small>
              <input type="number" className="border px-2 w-[60px] rounded-sm" />
            </div>
             <div className="flex items-center gap-4">
              <input type="checkbox" />
              <label className="mb-1 text-gray-600 font-light">Continue selling when out of stock</label>
            </div>
             <div className="flex items-center gap-4">
              <input type="checkbox" />
              <label className="mb-1 text-gray-600 font-light">This product has a SKU or barcode</label>
            </div>
          </div>
        </div>
        <div className="flex flex-col flex-1 border border-1 bg-white p-4 rounded-xl">
           <h3>Shipping</h3>
           <div className="flex items-center gap-4">
              <input type="checkbox" />
              <label className="mb-1 text-gray-600 font-light">This product has a SKU or barcode</label>
            </div>
            <div className="flex flex-col py-2 border-b pb-4">
              <label className="mb-1 text-gray-600 font-light">Weigth</label>
              <div className="flex gap-2">
              <input type="text" placeholder="0.0" className="border border-1 border-gray-400 p-2 rounded-lg h-[30px]" />
              <select defaultValue="kg" className="border border-1 border-gray-400 rounded-lg px-2">
                <option value="kg">kg</option>
                <option value="g">g</option>
                <option value="oz">oz</option>
                <option value="lb">lb</option>
              </select>
              </div>
            </div>
        </div>
        <div className="flex flex-col flex-1 border border-1 bg-white py-4 rounded-xl">
           <h3 className='py-2 px-4'>Variants</h3>
           <hr className='py-1'/>
           <div className="flex px-4 items-center gap-2">
              <span className="text-blue-600">
                <FontAwesomeIcon icon={faPlus} />
              </span>
              <label className="text-blue-600 font-light">This product has a SKU or barcode</label>
            </div>
        </div>
        <div className="flex flex-col flex-1 border border-1 bg-white py-4 rounded-xl">
          <div className="flex justify-between px-4 pb-1">
            <h3>Search engine listing</h3>
            <button className='text-blue-600'>Edit</button>
          </div>
          <label className="text-blue-600 font-light px-4 text-[14px]">Add a title and description to see how this product might appear in a search engine listing</label>
        </div>
      </div>
  );
};

export default ProductInfo;

