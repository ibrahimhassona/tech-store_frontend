"use client";

import { UrlDirection } from "../Sorting";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import Fetcher from "@/lib/fetcher";
import { addItems, deleteFDBSlice } from "../redux/cartSlice/cartSlice";
import { MdOutlineDeleteForever } from "react-icons/md";
import CustomButton from "@/components/CustomButton";
import deleteDataApi from "@/lib/deleteData";
import "react-toastify/dist/ReactToastify.css";
import { toast, Bounce } from "react-toastify";
import Image from "next/image";

const Cart = () => {
  const dBSliceData = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch<AppDispatch>();

  //--------- Filter to see if the clicked item in the cart is equal the item that on the server ? (deffrent id's) --------------
  const askIfTheyEqual = Fetcher(
    `/carts?populate[products][populate]=image`
  )?.data;
  // delete function .
  const deleteHandle = (product: any) => {
    let isIdsEqualTogether: any = askIfTheyEqual?.filter(
      (item) => item.attributes.products.data[0].id == product.products
    );
    // To delete from (server & DB) ;
    isIdsEqualTogether.length > 0 && deleteDataApi(isIdsEqualTogether[0]?.id);
    // Remove from the cart slice ;
    dispatch(deleteFDBSlice(product));
    // Alert Delete
    toast.error("Item Deleted", {
      position: "bottom-right",
      autoClose: 2500,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };

  // Calculate the cost
  const cost = dBSliceData.map((item) => {
    const count: number = item.count;
    const price: any = item.price;
    if (!isNaN(price)) {
      return count * price;
    } else {
      return 0;
    }
  });

  let totalCost: number = cost.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );

  const Shipping = totalCost * 0.04;
  const discount = totalCost * 0.02;
  const tax = totalCost * 0.05;
  return (
    <div className="min-h-[100vh] pb-10">
      <UrlDirection />
      <div className="container">
        <h1 className="text-[30px] max-md:text-[20px]  font-bold my-8 max-md:text-center">
          Your Cart
        </h1>
        <div className="container  w-full min-xl:w-[50%] md:w-[80%] mx-auto flex flex-col gap-3 rounded-sm cursor-pointer">
          {/* Products */}
          {dBSliceData.length != 0 ? (
            dBSliceData.map((product, index) => (
              <div
                key={index}
                className="bg-black/10 px-2 flex justify-between shadow-md"
              >
                <div className="flex items-center justify-start py-2 gap-1">
                  <div className="w-[50px]">
                    <img
                      className="w-fill"
                      src={`http://localhost:1337${product.image.data.attributes.url}`}
                      alt={product.title}
                    />
                  </div>
                  <h2 className="w-[200px] max-md:text-sm max-md:w-[100px] overflow-clip font-semibold line-clamp-1">
                    {product.title}
                  </h2>
                  <div className="grid grid-col-2 h-full text-center items-center justify-center w-[150px] max-sm:w-[100px] capitalize">
                    <p className="flex gap-3">
                      <span className="w-[50%]  font-semibold text-gray">
                        Count
                      </span>
                      <span className="w-[50%] font-semibold text-gray">
                        price
                      </span>
                    </p>
                    <p className="flex gap-3 items-center justify-center ">
                      <span className="w-[50%]">
                        {product.count !== undefined ? product.count : ""}
                      </span>
                      <span className="w-[50%]">${product.price}</span>
                    </p>
                  </div>
                </div>
                <div className="flex justify-center items-center">
                  <MdOutlineDeleteForever
                    className="text-4xl transition-all duration-300 text-[#db5151] hover:text-[#dd2323]"
                    onClick={() => deleteHandle(product)}
                  />
                </div>
              </div>
            ))
          ) : (
            <div className="w-full h-[300px] capitalize flex flex-col items-center gap-4 justify-center">
             <p className="font-semibold"> The cart is empty !</p>
              <Image src='/empty.png' alt="Empty Cart" width={100} height={100} className="max-md:w-[150px] w-[250px]" />
            </div>
          )}
          {/* End Products */}
          {/* Money Services & Checkout */}
          <div className="flex max-md:flex-col mt-8">
            {/* Money Services */}
            <div className="flex flex-col justify-start w-[50%] max-md:w-full font-bold px-1 max-md:px-5 text-gray">
              <h3 className="w-full flex  justify-between items-center">
                <span>Shipping Cost</span>
                <span>{Number(Shipping).toFixed(2) || 0.0} $</span>
              </h3>
              <h3 className="w-full flex  justify-between items-center">
                <span>Discount</span>
                <span>{Number(discount).toFixed(2) || 0.0} $</span>
              </h3>
              <h3 className="w-full flex  justify-between items-center">
                <span>Tax</span>
                <span>{Number(tax).toFixed(2) || 0.0} $</span>
              </h3>
              <h2 className="w-full flex text-black justify-between items-center">
                <span>Estimated Total</span>
                <span className="text-green">
                  {Shipping + discount + tax +totalCost|| 0.0} $
                </span>
              </h2>
            </div>
            {/* Money Services */}
            <div className="h-[95px] max-md:h-fit flex flex-col w-full justify-end items-end max-md:px-5 max-md:mt-5">
              <CustomButton
                Style="bg-black text-white px-[15px] rounded-sm hover:bg-black/70"
                Content="Check Out"
                Page=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
