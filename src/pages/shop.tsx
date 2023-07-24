import { useState } from "react";
import { shopConfig } from "../appConfig/shopConfig";

interface IProduct {
  id: number;
  title: string;
  description: string | undefined;
  by: string | undefined;
  price: number;
  discount: number | undefined;
  imgSrc: string;
  redirectUrl: string;
}

export default function Shop() {
  const [products, setProducts] = useState<IProduct[]>(shopConfig?.shop?.products);
  const [category, setCategory] = useState(shopConfig?.shop?.category[0]);
  return (
    <>
      <div className="flex flex-col items-start justify-center">
        <div className="w-full p-2 text-center font-mark bg-pale/40 ">
          <h1 className="text-3xl">{category?.category}</h1>
          <p className="text-xl">{category?.description}</p>
        </div>
        <div className="w-screen ">
          <div className="flex overflow-x-auto snap-x">
            {shopConfig?.shop?.category?.map((_category, index) => {
              return (
                <div
                  className={`px-5 py-2 border-r font-mark whitespace-nowrap snap-start ${
                    category?.category === _category.category ? "bg-pale/40" : ""
                  }`}
                  key={index}
                >
                  {_category.category}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center min-h-screen justify">
        <div className="grid grid-cols-1 gap-6 p-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products?.map((product, index) => {
            return <ProductCard key={index} product={product} />;
          })}
        </div>
      </div>
    </>
  );
}

interface IProductCard {
  product: IProduct;
}

const ProductCard = ({ product }: IProductCard) => {
  return (
    <div className="w-full sm:w-[220px] mx-auto  font-mark rounded-lg snap-center shadow flex flex-col overflow-hidden transition-all max-h-[400px]">
      <div className="overflow-hidden">
        <div
          style={{ backgroundImage: `url(${product?.imgSrc})` }}
          className=" bg-cover bg-center h-[200px] transition-all hover:scale-105"
        />
      </div>
      <div className="flex flex-col justify-between flex-1">
        <div className="p-1">
          <p className="text-base line-clamp-2 ">{product?.title}</p>
          <p className="text-sm text-black/80">{product?.description}</p>
          {product?.by && <p className="text-sm text-black/70">By {product?.by}</p>}
        </div>
        <div className="flex flex-col">
          <div className="p-1">
            <div className="my-1 border" />

            {product?.discount ? (
              <div className="flex items-center gap-2">
                <span className="">{product?.price - product?.price * (product?.discount / 100)}₹</span>
                <span className="text-sm line-through">{product?.price}₹</span>
                <span className="px-2 text-sm bg-red-200">{product?.discount}%</span>
              </div>
            ) : (
              <span className="">{product?.price}₹</span>
            )}
          </div>
          <a href={product?.redirectUrl} target="_blank" className="w-full p-1 font-bold text-center bg-green-500">
            Shop
          </a>
        </div>
      </div>
    </div>
  );
};
