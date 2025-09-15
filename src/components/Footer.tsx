import { contactLinks } from "@/constant";
import Link from "next/link";
import { FaLocationArrow } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="relative  z-10 w-fullrounded-t-lg  bg-gradient-to-r from-orange-700  to-purple-600">
      <div className="max-w-7xl mx-auto flex flex-wrap gap-6 items-center justify-center md:justify-between  py-12 px-4  ">

        <div className="text-xl font-poppin font-bold text-white">
          Aung Myo Aye

        </div>

        <div className="flex gap-4">
          {contactLinks.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              target="_blank"
              title={item.name}
              className="p-3  bg-orange-400  rounded-full shadow-md shadow-black/80 hover:scale-110 hover:-translate-y-1 transition-transform ease-in-out  "
            >
              {item.icon}
            </Link>
          ))}
        </div>
        <a
          href="mailto:aungmyoaye101@gmail.com"
          className="flex gap-1 items-center font-medium font-lora text-white px-4 py-2 rounded-full shadow  bg-gradient-to-r from-orange-500  to-amber-500 shadow-black/80"
        >
          <span> Contact Me</span>
          <FaLocationArrow />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
