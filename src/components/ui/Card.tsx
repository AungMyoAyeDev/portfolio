"use client";

import { delay, motion } from "framer-motion";

import Image from "next/image";
import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10
    },
  },
};

const containerVarient = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 100, damping: 15, staggerChildren: 0.2, when: "beforeChildren" },
  },

}

const titleVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeOut", delay: 0.5 },
  },
};

// Variants for the icon animation (pop-up fade).
const iconVariants = {
  hidden: { opacity: 0, scale: 0, x: -20 },
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: { type: "spring", stiffness: 200, damping: 15, delay: 0.6 },
  },
};

// Variants for the button animation (bottom-to-up fade).
const buttonVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut", delay: 0.7 },
  },
};

const Card = ({
  image,
  name,
  description,
  iconList,
  sourceCode,
  siteLink,
}: {
  image: string;
  name: string;
  description: string;
  iconList: { icon: string; name: string }[];
  sourceCode: string;
  siteLink: string;
}) => {

  return (
    < motion.div
      variants={itemVariants}
      initial="hidden"
      whileInView="visible"
      className="bg-gray-800 rounded-lg overflow-hidden w-full border border-gray-500">
      <div className="relative w-full aspect-video   overflow-hidden">
        <Image src={image} fill alt={name} className="hover:scale-125 transition-transform duration-150 ease-in-out" />
      </div>
      <div className="flex flex-col gap-2 px-4 py-4">
        <div className="flex justify-between items-center">

          <motion.h1
            variants={titleVariants}
            initial='hidden'
            whileInView="visible"
            className="text-lg sm:text-xl md:text-2xl font-poppin font-semibold text-white">
            {name}
          </motion.h1>

          <motion.div

            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ staggerChildren: 0.5, when: 'beforeChildren' }}
            className="flex items-center flex-wrap ">
            {iconList.map((icon, i) => (
              <motion.div
                variants={iconVariants}
                initial='hidden'
                whileInView="visible"
                key={i}
                className="flex w-8 h-8 justify-center items-center rounded-full bg-gray-700 border border-gray-600 hover:bg-orange-400 p-1 -ml-1"
              >
                <Image src={icon.icon} width={18} height={18} alt={icon.name} />

              </motion.div>
            ))}
          </motion.div>
        </div>
        <p className=" text-sm  line-clamp-2 font-poppin text-white/90">{description}</p>
        <div className="flex justify-between items-center text-orange-400">
          <motion.a
            variants={buttonVariants}
            initial='hidden'
            whileInView="visible"
            href={sourceCode}
            target="_blank"
            className="group relative flex items-center gap-2 text-base md:text-sm font-poppin hover:text-purple-400"
          >
            <FaGithub />
            <span>Source Code</span>
            <span className=" absolute -bottom-2 h-1 bg-purple-400 w-0 group-hover:w-full rounded-lg transition-all duration-300"></span>
          </motion.a>
          <motion.a
            variants={buttonVariants}
            initial='hidden'
            whileInView="visible"
            href={siteLink}
            target="_blank"
            className="group relative flex items-center gap-2 text-base md:text-sm font-poppin hover:text-purple-400"
          >
            <FaExternalLinkAlt />
            <span>Live Site</span>
            <span className=" absolute -bottom-2 h-1 bg-purple-400 w-0 group-hover:w-full rounded-lg transition-all duration-300"></span>
          </motion.a>
        </div>
      </div>
    </motion.div>

  );
};

export default Card;
