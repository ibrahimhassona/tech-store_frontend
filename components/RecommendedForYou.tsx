"use client";

import { ProductProp } from "@/app/type";
import Fetcher from "@/lib/fetcher";
import Link from "next/link";

const RecommendedForYou = ({ data }: { data: ProductProp }) => {
  // categores data

  const recommendedProducts = Fetcher(`/categories?populate[products][populate]=image`);
  const allCtg = recommendedProducts?.data;
  const ourCatg = data?.attributes?.categories.data; // here we get the product catgs.
  const array = (ourCatg as { id: number }[])?.map((item) => item.id) || [];
  // get the data that inclides (our categuries) Then enter to the products-data step
  const catgData = allCtg
    ?.filter((item) => array.includes(item.id))
    .map((e) => e.attributes.products.data);
  return (
    <div className="my-5">
      <h1 className="font-semibold text-2xl my-5">
        Recommended For You{"   "}
        <span className="text-[18px] font-normal">
        Related Products with :{" "}
          {ourCatg?.map((catg: any) => (
            <span key={catg.id} className="mr-2 capitalize underline">#{catg.attributes.title}</span>
          ))}
        </span>
      </h1>
      <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-5 justify-center">
        {catgData?.map((cagt) =>
          cagt.map((product: any) => (
            <Link href={`/products/${product.id}`}
              key={product.id}
              className=" flex flex-col gap-1 h-[250px] bg-white/50 shadow-md hover:bg-white hover:shadow-xl transition-all duration-300 p-5 cursor-pointer rounded-md"
            >
              <div className="w-full h-[50%] flex justify-center">
                <img src={`http://localhost:1337${product.attributes.image.data.attributes.url}`} alt={product.attributes.title} />
              </div>
              <h1 className="font-bold text-lg max-md:text-md uppercase line-clamp-1">
                {product.attributes.title}
              </h1>
              <p>
                Price : <b>$</b> {product.attributes.price}
              </p>
              <p
                className={`${
                  product?.attributes?.isAvailable ? "text-green/70" : "text-red"
                } font-semibold text-md`}
              >
                {product.attributes.isAvailable
                  ? "Available In our Store"
                  : "Not Available In our Store"}
              </p>
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default RecommendedForYou;
