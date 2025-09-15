"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React, { FC } from "react";

interface SkillsProp {
  title: string;
  skill: {
    icon: string;
    name: string;
    count: number;
  }[];
}

const techVarients = {
  hidden: {
    opacity: 0,
    transition: {
      staggerChildren: 1,
      duration: 1,
    },
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 1,
    },
  },
};

const TechSkills: FC<SkillsProp> = ({ title, skill }) => {
  return (
    <section className="w-full space-y-6 ">
      <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-poppin font-semibold text-white ">
        {title}
      </h1>
      <motion.section
        variants={techVarients}
        initial="hidden"
        animate="show"
        className="flex flex-wrap items-center  gap-5  "
      >
        {skill.map((skill, i) => (
          <div
            key={i}
            className="group relative flex  items-center  w-36  rounded-lg shadow-md gap-1 bg-gray-900 border-2 border-orange-400 hover:border-purple-500  overflow-hidden
              "
          >
            <motion.div
              initial={{ y: 10, opacity: 0.1 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                delay: 0.3,
                ease: "easeOut",
                duration: 0.2,
              }}
              className="relative z-30 size-11 p-1  flex justify-center items-center overflow-hidden rounded-lg  m-1 bg-white"
            >
              <Image
                src={skill.icon}
                width={40}
                height={40}
                alt={skill.name}
                sizes="(max-width:60px)"
                className="object-contain drop-shadow-md"
              />
            </motion.div>

            <motion.p
              initial={{ y: 10, opacity: 0.1 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                delay: 0.3,
                ease: "linear",
                duration: 0.1,
              }}
              className="relative z-30 font-poppin font-semibold text-sm mr-1 text-white/90"
            >
              {skill.name}
            </motion.p>

            <div
              className={
                "absolute bottom-0 z-20 w-0  group-hover:w-full h-full transition-all duration-500 ease-out bg-purple-500 "
              }
            ></div>
          </div>
        ))}
      </motion.section>
    </section>
  );
};

export default TechSkills;
