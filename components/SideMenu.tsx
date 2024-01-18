import { useUser } from "@clerk/nextjs";
import CustomButton from "./CustomButton";
import Logo from "./Logo";
import Nav from "./Nav";
import { CiLogin } from "react-icons/ci";


const SideMenu = ({ Opened }: { Opened: Boolean }) => {
  const {user} = useUser()
  return (
    <aside
      className={`${
        Opened === true ? "right-0" : "right-[-100%]"
      } top-0  h-full w-full fixed bg-white transition-all duration-500 z-30`}
    >
      <div className="flex flex-col items-center  h-full gap-[40px]">


        <div className="flex  items-center justify-center py-5">
          <Logo sizeH="" sizeS="bg-black text-white" />
        </div>


        <div>
          <Nav Style="flex flex-col gap-3 text-lg font-semibold" />
        </div>



        <div className="flex flex-col w-[50%] mx-auto items-center">
          {!user && <CustomButton
            Style="text-white w-[130px] py-[5px] text-lg bg-black flex "
            Content="Login"
            Icon={CiLogin}
            Page="/sign-in"
          /> }
        </div>



      </div>
    </aside>
  );
};

export default SideMenu;
