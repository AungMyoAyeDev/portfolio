"use client";
import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { FaLocationArrow, FaXmark } from "react-icons/fa6";
import SideBar from "./SideBar";
import { AnimatePresence, motion } from "framer-motion";
import { NavLinks } from "@/data";
import Button from "./ui/Button";
const buttonVarients = {
  initial: {
    opacity: 0,
    scale: 0,
    y: 50,
  },
  inView: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      delay: 1,
      ease: "easeOut",
      staggerChildren: 0.1,
      duration: 1,
    },
  },
};

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);

  const handleClick = () => {
    setOpen((pre) => !pre);
  };
  return (
    <div className="fixed top-0 left-0 right-0 shadow-md dark:bg-neutral-900 z-40   mx-auto">
      <nav className="max-w-7xl mx-auto z-40 flex justify-between items-center px-4 md:px-6  py-3 backdrop-blur-sm">
        <div
          className="block md:hidden rounded-full text-cyan-400 border border-cyan-400 p-2 shadow-md cursor-pointer relative z-50"
          onClick={handleClick}
        >
          {open ? <FaXmark /> : <FaBars />}
        </div>
        <AnimatePresence>
          {open && <SideBar handleClick={handleClick} />}
        </AnimatePresence>
        <div>
          <h1 className=" font-lora text-2xl md:text-3xl font-bold bg-primary-purple bg-clip-text text-transparent">
            AMA.
          </h1>
        </div>
        <div className="hidden md:flex items-center  text-xl font-lora font-semibold ">
          {NavLinks.map((link) => (
            <a
              key={link.id}
              href={link.link}
              className="px-4 py-1 relative"
              onClick={() => setActive(link.id)}
            >
              <span className="relative z-10 text-white/80">{link.name}</span>
              {active === link.id && (
                <motion.span
                  layoutId="active-pill"
                  className="absolute left-0 bottom-0 w-full h-1 bg-primary-purple  rounded-full"
                ></motion.span>
              )}
            </a>
          ))}
        </div>
        <div>
          {/* <a
            href="mailto:aungmyoaye101@gmail.com"
            className="flex gap-1 items-center font-medium font-poppin text-white hover:text-black p-2 rounded-full shadow-md  bg-gradient-to-tr from-orange-500 via-purple-500 to-sky-500"
          >
            <span className="hidden lg:block"> Contact Me</span>

            <FaLocationArrow />
          </a> */}
          <motion.a
            variants={buttonVarients}
            href="mailto:aungmyoaye101@gmail.com"
            className="text-white"
          >
            <Button text="Content me" size="text-sm" />
          </motion.a>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
