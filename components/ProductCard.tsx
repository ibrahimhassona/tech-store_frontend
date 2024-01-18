"use client";

import Fetcher from "@/lib/fetcher";
import CustomButton from "./CustomButton";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/app/redux/store";
const ProductCard = () => {
  // Redux-Store Data
  const reduxData = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch<AppDispatch>();

  // fetcher function => doing fetch for the requierd data.
  const result = Fetcher("/products?populate=*");
  return (
    <div className=" grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-5 justify-center items-center">
      {result?.data?.map((product) => (
        <div
          key={product.id}
          className="flex flex-col justify-center w-[300px] max-md:w-[90%] m-auto cursor-pointer  bg-white max-h-[330px] py-2 min-h-[300px] shadow-md "
        >
          {/* Image */}
          <Link
            href={`products/${product.id}`}
            className="overflow-hidden w-full h-[250px] flex  justify-center items-center p-5 bg-white"
          >
            <img
              src={`http://localhost:1337${product?.attributes.image.data?.attributes.url}`}
              alt={product?.attributes.title}
              className=" transition-all duration-500 hover:scale-110 w-[200px] max-md:w-fit  max-md:fit h-[220px]"
            />
          </Link>
          {/* content */}
          <div className="flex flex-col max-md:mt-5 justify-start px-2 gap-4">
            <div className="flex items-start justify-between max-md:items-center max-md:flex-col gap-2">
              <h2 className="font-bold  ">
                {product?.attributes.title.slice(0, 40)}
              </h2>
              <p className="text-gray text-sm font-semibold">
                ${product.attributes.price}
              </p>
            </div>
            <div>
              <p className="text-white text-sm flex justify-start max-md:justify-center items-center ">
                {product?.attributes.categories.data.map((item: any) => (
                  <span
                    key={item.attributes.title}
                    className="bg-black/30 w-fit px-1  mx-1 cursor-text rounded-sm"
                  >
                    {item.attributes.title}
                  </span>
                ))}
              </p>
            </div>
            <CustomButton
              Content="View"
              Style="bg-black text-white w-[30%] px-4 py-[8px] uppercase  hover:bg-black/70 mx-auto"
              Page={`/products/${product.id}`}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
