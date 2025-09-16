"use client";
import { NavLinks } from "@/data";
import React from "react";
import { FaX } from "react-icons/fa6";
import { motion } from "framer-motion"
const SideBar = ({ handleClick }: { handleClick: () => void }) => {
  const continerVarients = {
    hidden: { x: "-100%" },
    visible: { x: "0%" },
    transition: { ease: "easeInOut", staggerChildren: 0.2, when: 'beforeChildren' }
  }
  const continerVarient2 = {
    hidden: { opcity: 0 },
    visible: { xopacity: 1 },
    transition: { ease: "easeInOut", staggerChildren: 0.2, when: 'beforeChildren' }
  }
  const iconVariants = {
    hidden: { opacity: 0, scale: 0, y: 20 }, // Added x for left-to-right slide
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { type: "spring", stiffness: 200, damping: 20, staggerChildren: 0.2, },
    },
  };
  return (
    <motion.div
      variants={continerVarients}
      initial="hidden"
      animate="visible"
      exit="hidden"
      transition={{ ease: "easeInOut", staggerChildren: 0.2, when: 'beforeChildren' }}

      className={` fixed top-0 left-0   h-screen  w-full  flex flex-col md:hidden justify-center items-center gap-3 bg-gray-800  px-4  z-50 `}
    >
      <motion.button
        className="bg-orange-400 text-white/90 p-2 rounded-full absolute right-4 top-4" onClick={handleClick}><FaX />
      </motion.button>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        className="heading absolute top-0 mt-4">
        AUNG MYO AYE

      </motion.h1>
      <motion.div variants={continerVarient2} className="flex flex-col gap-4 w-full">


        {NavLinks.map((link, i) => (
          <motion.a
            variants={iconVariants}
            whileHover={{ scale: .9 }}
            href={link.link}
            className="w-full font-lora font-semibold text-lg py-2 text-center rounded-md bg-purple-600 hover:bg-orange-600 text-white"
            onClick={handleClick}
            key={i}
          >
            {link.name}
          </motion.a>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default SideBar;
