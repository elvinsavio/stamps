import { shopConfig } from "../appConfig/shopConfig";

export default function Shop() {
  return (
    <div className="container my-2 mx-auto px-2 md:px-12">
      <div className="flex flex-wrap -mx-1 lg:-mx-4">
        {shopConfig?.shop?.products?.map((product, index) => {
          return (
            <div key={index} className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3 justify-center flex">
              <ProductCard product={product} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

interface IProduct {
  id: number;
  title: string;
  description: string | undefined;
  by: string | undefined;
  price: number;
  discount: number | undefined;
  imgSrc: string;
}

interface IProductCard {
  product: IProduct;
}

const ProductCard = ({ product }: IProductCard) => {
  return (
    <div className="w-full font-mark rounded-lg shadow-lg snap-start flex flex-col overflow-hidden">
      <div style={{ backgroundImage: `url(${product?.imgSrc})` }} className=" bg-cover bg-center h-[200px]" />
      <div className="flex flex-col justify-between flex-1">
        <div className="p-1">
          <p className="text-base">{product?.title}</p>
          <p className="text-sm text-black/80">{product?.description}</p>
          {product?.by && <p className="text-sm text-black/70">By {product?.by}</p>}
        </div>
        <div className="p-1">
          <div className="border my-1" />

          {product?.discount ? (
            <div className="flex gap-2 items-center">
              <span className="">{product?.price - product?.price * (product?.discount / 100)}₹</span>
              <span className="line-through text-sm">{product?.price}₹</span>
              <span className="bg-red-200 px-2 text-sm">{product?.discount}%</span>
            </div>
          ) : (
            <span className="">{product?.price}₹</span>
          )}
        </div>
      </div>
    </div>
  );
};
