import Link from "next/link";
import Logo from "./Logo";
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";

const social = [
  {
    title: "Facebook",
    url: "https://www.facebook.com/hema.hassona.39",
    icon: <FaFacebook />,
  },
  {
    title: "WhatsApp",
    url: "https://wa.me/message/CPOSYXOOSFGIF1",
    icon: <FaWhatsapp />,
  },
  {
    title: "Telegram",
    url: "https://t.me/Ibrahimhassouna",
    icon: <FaTelegram />,
  },
];
const Footer = () => {
  return (
    <footer className="bg-gray py-3">
      <div className="container flex items-center justify-between max-md:justify-center max-md:flex-col py-2">
        {/* Logo */}
        <div>
          <Logo
            sizeH="text-[14px] text-white"
            sizeS="text-gray text-[9px] bg-white "
          />
        </div>
        {/* Social */}
        <div className="flex items-center gap-5  max-md:flex-col  max-md:mt-5">
          {social.map((link, index) => (
            <Link
              key={index}
              href={link.url}
              className="flex items-center gap-2 text-white hover:text-black transition-all duration-300"
            >
              {link.title}
              {link.icon}
            </Link>
          ))}
        </div>
      </div>
      <p className="container flex items-center justify-center border-t py-2 text-white text-wrap">
        &copy; 2024{" "}
        <Link href="/" className="text-black link-item hover:text-white mx-1">
          Hassouna Tech
        </Link>{" "}
        All rights reserved.{" "}
      </p>
    </footer>
  );
};

export default Footer;
