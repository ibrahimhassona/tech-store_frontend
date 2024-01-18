"use client";

import { ProductProp } from "@/app/type";
import CustomButton from "./CustomButton";
import QuantityControl from "./QuantityControl";
import { useState } from "react";
import { useUser } from "@clerk/nextjs";
import Fetcher from "@/lib/fetcher";
import updateItem from "@/lib/updateItem";
import PostDataSender from "@/lib/postData";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/app/redux/store";
import { addItems } from "@/app/redux/cartSlice/cartSlice";
import "react-toastify/dist/ReactToastify.css";
import { toast, Bounce } from "react-toastify";

const CardDetailes = ({ data }: { data: ProductProp }) => {
  // Redux
  const reduxData = useSelector((state: RootState) => state.cart.items);

  const dispatch = useDispatch<AppDispatch>();
  // fetch the cart data
  const allCartData = Fetcher("/carts?populate=*")?.data;
  const url = "http://localhost:1337"; // to show the image

  // Array of all items
  // States
  const [value, setValue] = useState<number>(1);
  const [isRepeated, setIsRepeated] = useState<boolean>(false);
  const { user } = useUser();

  const addItemToStore = (
    id: number,
    title: string,
    price: number,
    image: any
  ) => {
    const data: any = {
      data: {
        username: user?.fullName, //from clerk
        email: user?.primaryEmailAddress?.emailAddress, // from clerk
        count: value, //from the state that we make it to control in the count.
        products: id,
        image: image,
        title: title,
        price: price,
      },
    };
    // 1- filter on the comming from cart API , if the data is repeated ?
    const neededItemId: any = allCartData?.filter(
      (item) => item.attributes.products.data[0].id == id
    );
    neededItemId?.length == 1 ? setIsRepeated(true) : setIsRepeated(false);
    // - if repeated get it and UPDATE
    if (isRepeated) {
      const theIdWillUpdate = neededItemId[0].id;
      updateItem(data, theIdWillUpdate); // update function ;
    } else {
      // - if no POST it
      PostDataSender(data);
    }
    // Redux-Update Count or add it as a new one .
    dispatch(addItems(data.data));

    // Alerts
    toast.success("Product Added To Cart", {
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

  //---------Control in quantity of item--------------
  const increaseQuantity = () => {
    setValue(value + 1);
  };
  const decreaseQuantity = () => {
    value > 1 ? setValue(value - 1) : setValue(1);
  };
  return (
    <div>
      <h1 className="font-bold text-2xl my-5">
        Viewing : {data?.attributes?.title}
      </h1>
      <div className="grid grid-cols-2 gap-3 max-md:grid-cols-1 justify-center items-center py-5">
        {/* Image */}
        <div className="w-full flex justify-center items-center">
          <img
            src={`${url}${data?.attributes?.image.data.attributes.url}`}
            alt={data?.attributes?.title}
            className=" w-[50%] max-md:w-[70%]"
          />
        </div>
        {/* Content */}
        <div className="flex flex-col gap-5 max-md:items-center ">
          <h1 className="font-bold text-2xl max-md:text-xl my-2 uppercase">
            {data?.attributes?.title}
          </h1>
          <div className="flex justify-between items-center max-md:flex-col max-w-[350px]">
            <p className="text-black">
              Price : <b>$</b> {data?.attributes?.price}
            </p>
            <p
              className={`${
                data?.attributes?.isAvailable ? "text-green/70" : "text-red"
              } font-semibold`}
            >
              {data?.attributes?.isAvailable
                ? "Available In our Store"
                : "Not Available In our Store"}{" "}
            </p>
          </div>
          <p className="text-gray max-md:w-[90%]">
            <b>About The Product</b>: {data?.attributes?.desc}
          </p>
          <div className="flex justify-between items-center max-w-[350px]">
            <div
              onClick={() => {
                addItemToStore(
                  data.id,
                  data.attributes.title,
                  data.attributes.price,
                  data.attributes.image
                );
              }}
            >
              <CustomButton
                Style="bg-black text-white py-[5px] px-[14px] hover:bg-black/70"
                Content="Add To Cart"
                Page=""
              />
            </div>
            {/* Quantity Control */}
            <QuantityControl
              increase={increaseQuantity}
              decrease={decreaseQuantity}
              value={value}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetailes;
