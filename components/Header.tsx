"use client";

import { CiShoppingCart } from "react-icons/ci";
import Nav from "./Nav";
import Logo from "./Logo";
import MobileNav from "./MobileNav";
import CustomButton from "./CustomButton";
import { CiLogin } from "react-icons/ci";
import { UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";
import Fetcher from "@/lib/fetcher";

const Header = () => {
  //-------------Show the numbers of items in cart ------------
  const { user } = useUser();
  const cartCountFromCart = useSelector(
    (state: RootState) => state.cart.items.length
  );
  const countFromDB = Fetcher('/carts?populate=*')?.data.length
// --------------------------
  return (
    <header className=" bg-white text-black shadow-lg py-2">
      <div className="container flex flex-row items-center justify-between">
        {/* logo */}
        <div>
          <Logo sizeH="" sizeS="text-white bg-black" />
        </div>
        {/* Links */}
        <div>
          {/* main links */}
          <Nav Style="flex max-md:hidden " />
        </div>
        {/* Cart Icon  */}
        <Link href="/cart" className="relative w-fit cursor-pointer">
          <CiShoppingCart className="text-4xl" />
          <span className="absolute top-0 text-sm  rounded-full bg-black text-white w-[20px] h-[20px] flex items-center justify-center right-0">
            {user ?  (cartCountFromCart == 0 ? countFromDB : cartCountFromCart) : 0}
          </span>
        </Link>
        <div className="flex flex-row items-center justify-center gap-5">
          {/* Login */}
          <div className="flex gap-4 items-center justify-center">
            {!user && (
              <CustomButton
                Style="text-white bg-black flex max-md:hidden hover:bg-black/70"
                Content="Login"
                Icon={CiLogin}
                Page="/sign-in"
              />
            )}
            <UserButton />
          </div>
          {/* Mobile Nav */}
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
