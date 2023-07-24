import { ReactNode, useEffect, useState } from "react";
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
  category: string;
}

export default function Shop() {
  const [products, setProducts] = useState<IProduct[]>(shopConfig?.shop?.products);
  const [category, setCategory] = useState(shopConfig?.shop?.category[0]);
  const [filter, setFilter] = useState("Recommended");

  const getDiscountedPrice = (price: number, discount: number | undefined) => {
    return discount ? price - price * (discount / 100) : price;
  };
  useEffect(() => {
    const tempProduct = products;
    switch (filter) {
      case "Recommended":
        setProducts(
          tempProduct.sort((a, b) => {
            return a.id - b.id;
          })
        );
        break;
      case "Price (Lowest)":
        setProducts(
          tempProduct.sort((a, b) => {
            return getDiscountedPrice(a.price, a.discount) - getDiscountedPrice(b.price, b.discount);
          })
        );
        break;
      case "Price (Highest)":
        setProducts(
          tempProduct.sort((a, b) => {
            return getDiscountedPrice(a.price, a.discount) + getDiscountedPrice(b.price, b.discount);
          })
        );
        break;
    }
  }, [filter]);

  useEffect(() => {
    let tempProduct = shopConfig?.shop?.products;
    if (category.category === "All") {
      setProducts(tempProduct);
    } else {
      tempProduct = tempProduct.filter((each) => each.category === category.category);
      setProducts(tempProduct);
    }
  }, [category.category]);

  return (
    <>
      <div className="flex flex-col items-start justify-center border-b ">
        <div className="w-full p-2 text-center font-mark bg-pale/40 ">
          <h1 className="text-3xl">{category?.category}</h1>
          <p className="text-xl">{category?.description}</p>
        </div>
        <div className=" contianer">
          <div className="flex overflow-x-auto snap-x">
            {shopConfig?.shop?.category?.map((_category, index) => {
              return (
                <div
                  key={index}
                  onClick={() => setCategory(_category)}
                  className={`px-5 py-2 border-r font-mark whitespace-nowrap snap-start cursor-pointer ${
                    category?.category === _category.category ? "bg-pale/40" : ""
                  }`}
                >
                  {_category.category}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2 p-2">
        <p>Sort by</p>

        <button
          data-dropdown-toggle="dropdown"
          className="flex items-center justify-center p-1 px-2 text-sm text-center text-black rounded bg-primary "
          type="button"
        >
          {filter}
          <svg
            className="w-2.5 h-2.5  mt-1 ml-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 1 4 4 4-4"
            />
          </svg>
        </button>
        <div id="dropdown" className="z-10 hidden text-black divide-y rounded shadow bg-primary min-w-44">
          <ul className="py-2 text-sm">
            <DropDownItem onClick={() => setFilter("Recommended")}>Recommended</DropDownItem>
            <DropDownItem onClick={() => setFilter("Price (Lowest)")}>Price (Lowest)</DropDownItem>
            <DropDownItem onClick={() => setFilter("Price (Highest)")}>Price (Highest)</DropDownItem>
            <DropDownItem onClick={() => null}>HW</DropDownItem>
          </ul>
        </div>
      </div>

      <div className="flex flex-col items-center min-h-screen justify">
        {products?.length === 0 && <span className="p-2 text-xl">Nothing found ¯\_(ツ)_/¯</span>}
        <div className="grid grid-cols-1 gap-6 p-2 xsm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
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
          className=" bg-cover bg-center h-[200px] transition-all p-2"
        >
          <span className="flex-wrap px-2 text-white bg-black rounded w-fit line-clamp-1">{product.category}</span>
        </div>
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

const DropDownItem = ({ children, onClick }: { children: ReactNode; onClick: () => void }) => {
  return (
    <li>
      <span onClick={onClick} className="block px-4 py-2 cursor-pointer hover:bg-black/60 hover:text-white ">
        {children}
      </span>
    </li>
  );
};
