import { LogoProps } from "@/app/type";
import Link from "next/link";

const Logo = ({sizeH,sizeS}:LogoProps) => {
  return (
    <Link href='/' className="py-2 ">
      <h2 className={`${sizeH} text-black font-extrabold text-xl text-nowrap`}>
        HASSOUNA{" "}
        <span className={`${sizeS} text-[11px] inline-flex  px-[3px]  rounded-tr-full rounded-bl-full rounded-tl-full`}>
          Tech
        </span>
      </h2>
    </Link>
  );
};

export default Logo;
