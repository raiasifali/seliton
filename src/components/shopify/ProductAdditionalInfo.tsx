export default function ProductAdditionalInfo() {
  return <div className="grow-[3]">
    <div className="flex flex-col flex-1 border border-1 bg-white p-4 rounded-xl">
      <h3 className="mb-2">Status</h3>
      <select defaultValue="kg" className="border border-1 border-gray-400 rounded-lg px-2 h-[35px]">
        <option value="kg">kg</option>
        <option value="g">g</option>
        <option value="oz">oz</option>
        <option value="lb">lb</option>
      </select>
    </div>
  </div>
}
