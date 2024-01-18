import Image from "next/image";
import CustomButton from "./CustomButton";

const Hero = () => {
  return (
    <section className="h-[calc(100vh-52px)] max-md:py-5 overflow-hidden">
      <div className="container grid grid-cols-2 gap-5 max-md:grid-cols-1 max-md:gap-10 max-md:text-center justify-center items-center h-full ">
        {/* Text */}
        <div className="flex flex-col gap-5 max-md:items-center">
          <h1 className="font-bold text-[40px]">Welcome In <span className="text-gray">Hassouna Tech Store.</span>  </h1>
          <p className="text-gray">
            Your one-stop destination for cutting-edge electronics. Explore our
            wide range of top-tier mobiles, laptops, tablets, and TVs,
            meticulously curated to enhance your digital lifestyle. Discover
            innovation and quality at every click, making Hassouna Tech the
            go-to choice for all your tech needs.
          </p>
          {/* Button */}
          <CustomButton Content="Shop Now" Style="bg-black text-white px-5 py-[5px] w-fit max-md:w-[50%] max-md:py-2" Page="#products"/>
        </div>
        {/* image */}
        <div className="flex justify-center items-center">
            <Image src='/hero.svg' alt="Hero" width={300} height={300} className="w-[60%] ml-auto max-md:m-auto"/>
        </div>
      </div>
    </section>
  );
};

export default Hero;
