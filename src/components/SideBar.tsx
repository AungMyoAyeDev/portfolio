"use client";
import { NavLinks } from "@/data";
import { motion } from "framer-motion";
import React from "react";
import { FaX } from "react-icons/fa6";


const SideBar = ({ handleClick }: { handleClick: () => void }) => {
  return (
    <motion.div
      initial={{ x: '-100%' }}
      animate={{ x: 0 }}
      exit={{ x: '-100%' }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      className="fixed top-0 left-0  h-screen  w-full  flex flex-col md:hidden justify-center items-center gap-3 bg-gray-800  px-4  z-50 "
    >
      <button className="bg-orange-400 text-white/90 p-2 rounded-full absolute right-4 top-4" onClick={handleClick}><FaX /></button>
      {NavLinks.map((link, i) => (
        <motion.a

          className="w-full font-lora font-semibold text-lg py-2 text-center rounded-md bg-purple-600 hover:bg-orange-600 text-white"
          onClick={handleClick}
          key={i}
        >
          {link.name}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default SideBar;
