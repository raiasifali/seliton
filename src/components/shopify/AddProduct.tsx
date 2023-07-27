import ProductInfo from './ProductInfo';
import ProductAdditionalInfo from './ProductAdditionalInfo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const AddProduct = () => {
  return (
    <section className="px-20 py-4 flex flex-col gap-6 bg-gray">
      <header className="flex gap-4 items-center">
        <div>
          <FontAwesomeIcon icon={faArrowLeft} />
        </div>
        <h1 className="text-[24px] font-bold">Add Product</h1>
      </header>
      <main className="flex gap-4">
        <ProductInfo />
        <ProductAdditionalInfo />
      </main>
    </section>
  );
};

export default AddProduct;
