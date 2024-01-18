"use client"
import Fetcher from "@/lib/fetcher";
import { ProductCard, UrlDirection } from "../Sorting";
import SkeltonProduct from "@/components/SkeltonProduct";

const Products = () => {
  const result = Fetcher("/products?populate=*");

  return (
    <section className="overflow-hidden" id="products">
      {/* URL For this page */}
      <UrlDirection />
      <div className="container py-10">
        {/* head */}
        <h1 className="text-[30px] max-md:text-[20px] w-full font-bold my-8 max-md:text-center">
          Products
        </h1>
        {/* Product */}
        {result ? <ProductCard /> :<SkeltonProduct/>}
      </div>
    </section>
  );
};

export default Products;
