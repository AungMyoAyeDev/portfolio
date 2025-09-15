"use client";

import { NavLinks } from "@/data";
import Link from "next/link";
import React from "react";
import { FaX } from "react-icons/fa6";


const SideBar = ({ handleClick, isOpen }: { handleClick: () => void, isOpen: boolean }) => {
  return (
    <div
      className={`${isOpen ? '-translate-x-full' : "translate-x-0"} transition-transform duration-500 ease-in-out fixed top-0 left-0   h-screen  w-full  flex flex-col md:hidden justify-center items-center gap-3 bg-gray-800  px-4  z-50 `}
    >
      <button className="bg-orange-400 text-white/90 p-2 rounded-full absolute right-4 top-4" onClick={handleClick}><FaX /></button>
      {NavLinks.map((link, i) => (
        <Link
          href={link.link}
          className="w-full font-lora font-semibold text-lg py-2 text-center rounded-md bg-purple-600 hover:bg-orange-600 text-white"
          onClick={handleClick}
          key={i}
        >
          {link.name}
        </Link>
      ))}
    </div>
  );
};

export default SideBar;
