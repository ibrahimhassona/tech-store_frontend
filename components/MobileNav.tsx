"use client"
import { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import SideMenu from "./SideMenu";

const MobileNav = () => {
    const [isMobMenuOpen,setIsMobMenuOpen] = useState<Boolean>(false)

    const handleMenuState =()=>{
        setIsMobMenuOpen(!isMobMenuOpen)
    }
  return (

    <nav onClick={handleMenuState} className={`max-md:flex hidden items-center gap-4 cursor-pointer text-2xl text-black link-item`} >
        <CiMenuFries />
        <SideMenu Opened={isMobMenuOpen}/>
    </nav>
  )
}

export default MobileNav;

