import { CustomButtonProps } from "@/app/type";
import Link from "next/link";

const CustomButton: React.FC<CustomButtonProps> = ({
  Icon,
  Content,
  Style,
  Page,
}) => {
  return (
    <Link
      href={Page}
      className={`${Style} flex gap-2 items-center justify-center rounded-lg px-2 py-[2px] transition-all duration-300`}
    >
      {Content}
      <span className="text-xl">{Icon && <Icon />}</span>
    </Link>
  );
};

export default CustomButton;
