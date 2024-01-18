"use client";
import CardDetailes from "@/components/CardDetailes";
import RecommendedForYou from "@/components/RecommendedForYou";
import UrlDirection from "@/components/UrlDirection";
import Fetcher from "@/lib/fetcher";


const Product = ({ params }: { params: { Id: string } }) => {
  let param = params.Id;


  const product: any = Fetcher(`/products/${param}?populate=*`);

  return (
    <main className="container overflow-hidden">
      <UrlDirection />
      <section>
        <CardDetailes data={product?.data} />
        <RecommendedForYou data={product?.data}/>
      </section>
    </main>
  );
};

export default Product;
