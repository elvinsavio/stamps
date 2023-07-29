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

type TCategory = {
  category: string;
  description?: string;
};
function getCategory(): TCategory[] {
  const tempCat = shopConfig?.shop?.category;
  tempCat.unshift({
    category: "All",
  });
  return tempCat;
}

export default function Shop() {
  const [products, setProducts] = useState<IProduct[]>(shopConfig?.shop?.products);
  const [category, setCategory] = useState<TCategory | undefined>();
  const [filter, setFilter] = useState("Recommended");

  const getDiscountedPrice = (price: number, discount: number | undefined) => {
    return discount ? price - price * (discount / 100) : price;
  };
  useEffect(() => {
    switch (filter) {
      case "Recommended":
        setProducts(
          products.sort((a, b) => {
            return a.id - b.id;
          })
        );
        break;
      case "Price (Lowest)":
        setProducts(
          products.sort((a, b) => {
            return getDiscountedPrice(b.price, b.discount) - getDiscountedPrice(a.price, a.discount);
          })
        );
        break;
      case "Price (Highest)":
        setProducts(
          products.sort((a, b) => {
            return getDiscountedPrice(a.price, a.discount) - getDiscountedPrice(b.price, b.discount);
          })
        );
        break;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter]);

  useEffect(() => {
    let tempProduct = shopConfig?.shop?.products;
    if (category?.category === "All") {
      setProducts(tempProduct);
    } else {
      tempProduct = tempProduct.filter((each) => each.category === category?.category);
      setProducts(tempProduct);
    }
  }, [category?.category]);

  useEffect(() => {
    const tempCat = getCategory()[0];
    setCategory(tempCat);
  }, []);
  return (
    <>
      <div className="flex flex-col items-start justify-center border-b bg-pale">
        <div className=" contianer">
          <div className="flex overflow-x-auto snap-x">
            {shopConfig?.shop?.category?.map((_category, index) => {
              return (
                <div
                  key={index}
                  onClick={() => setCategory(_category)}
                  className={`px-5 py-2 font-mark whitespace-nowrap snap-start cursor-pointer  ${
                    category?.category === _category.category ? "bg-primary text-white" : "bg-pale"
                  }`}
                >
                  {_category.category}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2 p-2 bg-pale">
        <p>Sort by</p>

        <button
          data-dropdown-toggle="dropdown"
          className="flex items-center justify-center p-1 px-2 text-sm text-center text-white bg-primary "
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
        <div id="dropdown" className="z-10 hidden overflow-hidden text-black shadow bg-primary min-w-44">
          <ul className="text-sm">
            <DropDownItem onClick={() => setFilter("Recommended")}>Recommended</DropDownItem>
            <DropDownItem onClick={() => setFilter("Price (Lowest)")}>Price (Lowest)</DropDownItem>
            <DropDownItem onClick={() => setFilter("Price (Highest)")}>Price (Highest)</DropDownItem>
          </ul>
        </div>
      </div>
      <div>
        <p className="px-2 bg-pale">{category?.description}</p>
      </div>

      <div className="flex flex-col items-center min-h-screen justify bg-pale">
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
    <div className="w-full sm:w-[220px] mx-auto shadow-secondary shadow-2xl  font-mark snap-center shadow- flex flex-col overflow-hidden transition-all max-h-[420px] bg-white">
      <div className="overflow-hidden">
        <div
          style={{ backgroundImage: `url(${product?.imgSrc})` }}
          className=" bg-cover bg-center h-[250px] transition-all p-2 bg-secondary/50"
        >
          <span className="flex-wrap px-2 text-white bg-black w-fit line-clamp-1">{product.category}</span>
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
                <span className="px-2 text-sm bg-red-200 ">{product?.discount}%</span>
              </div>
            ) : (
              <span className="">{product?.price}₹</span>
            )}
          </div>
          <a
            href={product?.redirectUrl}
            target="_blank"
            className="w-full p-1 font-bold text-center text-white bg-secondary"
          >
            Buy now!
          </a>
        </div>
      </div>
    </div>
  );
};

const DropDownItem = ({ children, onClick }: { children: ReactNode; onClick: () => void }) => {
  return (
    <li>
      <span
        onClick={onClick}
        className="block px-4 py-2 text-white cursor-pointer hover:bg-black/60 hover:bg-secondary"
      >
        {children}
      </span>
    </li>
  );
};
