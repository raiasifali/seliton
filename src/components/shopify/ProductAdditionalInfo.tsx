import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

export default function ProductAdditionalInfo() {
  return (
    <div className="grow-[3]">
      <div className="flex flex-col flex-1 border border-1 bg-white p-4 rounded-xl">
        <h3 className="mb-2 text-bold">Status</h3>
        <select
          defaultValue="kg"
          className="border border-1 text-[14px] border-gray-400 rounded-lg px-2 h-[35px]"
        >
          <option value="kg">kg</option>
          <option value="g">g</option>
          <option value="oz">oz</option>
          <option value="lb">lb</option>
        </select>
      </div>

      <div className="flex flex-col flex-1 border border-1 bg-white py-4 rounded-xl my-4">
        <div className="flex justify-between px-4 pb-1">
          <h3 className="text-bold">Publishing</h3>
          <div className="relative inline-block">
            <select
              defaultValue="manage"
              className="text-blue-600 border-none outline-none"
            >
              <option value="manage">Manage</option>
              <option value="manage">Manage</option>
              <option value="manage">Manage</option>
              <option value="manage">Manage</option>
            </select>
          </div>
        </div>
        <label className="font-light px-4 text-[14px]">Sales channels</label>
        <div className="flex justify-between align-center px-4 py-2">
          <div className="flex items-center gap-2">
            <span className=" font-light text-gray-600 inline-block m-auto w-3 h-3 border border-gray-500 bg-black rounded-full"></span>
            <h3 className="font-light text-gray-600 text-[14px]">
              Online Store
            </h3>
          </div>
          <span className="font-light text-gray-600">
            <input type="date" className="w-[20px]" />
          </span>
        </div>
        <label className="font-light px-4 text-[14px]">Markets</label>
        <div className="flex justify-between items-center px-4 py-2">
          <div className="flex">
            <span className="inline-block m-auto w-3 h-3 border border-gray-500 bg-black rounded-full"></span>
            <h3 className="px-2 font-light text-gray-600">
              International, Mexico, and Pakistan
            </h3>
          </div>
        </div>
      </div>

      <div className="flex flex-col flex-1 border border-1 bg-white p-4 rounded-xl">
        <div className="flex">
          <h3 className="mb-2 text-bold">Product organization</h3>
          <span className="mb-auto pl-3">
            <FontAwesomeIcon icon={faInfoCircle} />
          </span>
        </div>
        <h2 className="mb-1 text-gray-600 text-[14px]">Product category</h2>
        <input
          type="text"
          placeholder="Search"
          className="border mb-3 rounded p-1 border-1 border-gray-400"
        />
        <h2 className="mb-1 text-gray-600 text-[14px]">Product type</h2>
        <input
          type="text"
          className="border mb-3 rounded p-1 border-1 border-gray-400"
        />
        <h2 className="mb-1 text-gray-600 text-[14px]">Vendor</h2>
        <input
          type="text"
          className="border mb-3 rounded p-1 border-1 border-gray-400"
        />

        <h2 className="mb-1 text-gray-600 text-[14px]">Collection</h2>
        <input
          type="text"
          className="border mb-3 rounded p-1 border-1 border-gray-400"
        />

        <div className="flex justify-between">
          <h3 className="mb-1 text-[14px]">tags</h3>
          <span className="text-blue-400">Manage</span>
        </div>
        <input
          type="text"
          className="border mb-3 rounded p-1 border-1 border-gray-400"
        />
      </div>

      <div className="my-4 flex flex-col flex-1 border border-1 bg-white p-4 rounded-xl">
        <h3 className="mb-2 text-bold">Online Store</h3>
        <h4 className="text-gray-500 text-[14px] mb-1">Theme template</h4>
        <select
          className="border border-gray-500 p-2 rounded-lg cursor-not-allowed text-gray-500 opacity-50"
          disabled
        >
          <option>Default product</option>
        </select>
      </div>
    </div>
  );
}
