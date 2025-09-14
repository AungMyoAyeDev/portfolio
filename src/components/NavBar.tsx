"use client";
import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import SideBar from "./SideBar";
import { AnimatePresence } from "framer-motion";
import { NavLinks } from "@/data";
import Link from "next/link";



const NavBar = () => {
  const [open, setOpen] = useState(false);


  const handleClick = () => {
    setOpen((pre) => !pre);
  };
  return (
    <div className="fixed top-0 left-0 right-0 shadow-md dark:bg-neutral-900 z-40   mx-auto">
      <AnimatePresence>

        {
          open && <SideBar handleClick={handleClick} />
        }
      </AnimatePresence>
      <nav className="max-w-7xl mx-auto z-40 flex justify-between items-center px-4 md:px-6  py-3 backdrop-blur-sm">


        <button className="block md:hidden text-lg text-white bg-purple-600 rounded-full p-2" onClick={handleClick}><FaBars /></button>


        <Link href="/">
          <h1 className="font-poppin font-bold text-white md:text-purple-500 text-2xl sm:text-2xl md:text-4xl ">AMA.</h1>
        </Link>
        <div className="hidden md:flex items-center text-white/90">
          {
            NavLinks.map(link => (
              <a key={link.id} href={link.link} className="relative group px-3 py-2 font-poppin text-lg font-semibold uppercase">
                <span>{link.name}</span>
                <span className=" absolute rounded-full h-1 bottom-0 left-0 w-0 bg-purple-600 group-hover:w-full transition-all  ease-in-out duration-200"></span></a>
            ))
          }
        </div>
        <div>
          <a href="" className="bg-purple-600 px-4 py-2 text-sm md:text-base rounded-lg text-white hover:bg-orange-400">Contact me</a>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
