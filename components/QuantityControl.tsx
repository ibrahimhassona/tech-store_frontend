"use client";

import { IoMdArrowDropright } from "react-icons/io";
import { IoMdArrowDropleft } from "react-icons/io";

interface QuantityControlProps {
  increase: () => void;
  decrease: () => void;
  value: number;
}
const QuantityControl = ({
  increase,
  decrease,
  value,
}: QuantityControlProps) => {
  return (
    <div className="flex  items-center ">
      {/* plus */}
      <div>
        <IoMdArrowDropleft
          className="text-4xl text-black hover:text-gray cursor-pointer transition-all duration-300"
          onClick={increase}
        />
      </div>
      <input
        type="number"
        disabled
        value={value}
        className="w-[50px] text-black bg-white outline-none border text-center h-6 rounded-sm"
      />
      {/* minus */}
      <div>
        <IoMdArrowDropright
          className="text-4xl text-black hover:text-gray cursor-pointer transition-all duration-300"
          onClick={decrease}
        />
      </div>
    </div>
  );
};

export default QuantityControl;
