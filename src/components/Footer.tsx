import React from "react";
import { FaInstagram } from "react-icons/fa6";
import { FaGithub, FaLinkedin, FaLocationArrow } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative z-10 w-full py-12 px-4 md:px-6 rounded-t-lg flex flex-wrap gap-6 items-center justify-center md:justify-between bg-gradient-to-r from-neutral-500 via-neutral-600 to-neutral-500">
      <div className="text-xl font-poppin font-semibold ">
        Aung Myo Aye - Portfolio
      </div>

      <div className="flex gap-4">
        <a
          href="https://github.com/AungMyoAye101"
          target="_blank"
          className="p-3 border border-cyan-400  rounded-full shadow-md bg-neutral-900 hover:bg-cyan-400 hover:text-black"
        >
          <FaGithub className="text-xl " />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=61556195843942"
          target="_blank"
          className="p-3 border border-cyan-400  rounded-full shadow-md  bg-neutral-900 hover:bg-cyan-400 hover:text-black"
        >
          <FaFacebookF className="text-xl  " />
        </a>
        <a
          href=""
          target="_blank"
          className="p-3 border border-cyan-400  rounded-full shadow-md hover:bg-cyan-400 bg-neutral-900 hover:text-black"
        >
          <FaLinkedin className="text-xl  " />
        </a>
        <a
          href="https://www.instagram.com/aungmyoaye404/"
          target="_blank"
          className="p-3 border border-cyan-400  rounded-full shadow-md bg-neutral-900 hover:bg-cyan-400 hover:text-black"
        >
          <FaInstagram className="text-xl  " />
        </a>
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
