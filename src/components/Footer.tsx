import { contactLinks } from "@/constant";
import { FaLocationArrow } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="relative z-10 w-full py-12 px-4 md:px-6 rounded-t-lg flex flex-wrap gap-6 items-center justify-center md:justify-between">
      <div className="text-xl font-poppin font-semibold ">
        Aung Myo Aye - Portfolio
      </div>

      <div className="flex gap-4">
        {contactLinks.map((item) => (
          <a
            key={item.id}
            href={item.href}
            title={item.name}
            className="p-3  bg-cyan-400  rounded-full shadow-md  "
          >
            {item.icon}
          </a>
        ))}
      </div>
      <a
        href="mailto:aungmyoaye101@gmail.com"
        className="flex gap-1 items-center font-medium font-poppin text-white px-4 py-2 rounded-full shadow-md  bg-gradient-to-tr from-orange-500 via-purple-500 to-sky-500 hover:text-black "
      >
        <span> Contact Me</span>
        <FaLocationArrow />
      </a>
    </footer>
  );
};

export default Footer;
