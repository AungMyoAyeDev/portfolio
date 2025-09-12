"use client";

import Image from "next/image";
import React from "react";
import TechSkills from "./TechSkills";
import { backEnd, frontEnd, others, skills } from "@/data";
import { MagicCard } from "./ui/MagicCard";
import { motion } from "framer-motion";

export const animateText = {
  close: {
    opacity: 0,
    y: 20,
  },
  open: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.5,
      ease: "easeIn",
      staggerChildren: 0.2,
    },
  },
};

const Skills = () => {
  return (
    <section className="section-container" id="skill">
      <div className="flex flex-col items-center ">
        <h1 className="heading ">My Skills</h1>
      </div>
      {/* My Skills  */}

      <div className="flex flex-wrap justify-center items-center gap-6  md:gap-10  mb-8">
        {skills.map(({ id, image, title, description }) => (
          <MagicCard
            key={id}
            className="  w-80 h-80 py-6 px-4 rounded-xl shadow-md  relative border border-black/90 "
          >
            <motion.div
              variants={animateText}
              initial="close"
              whileInView="open"
            >
              <Image src={image} width={60} height={40} alt="title" />

              <div className="space-y-3 mt-2">
                <motion.h1
                  variants={animateText}
                  initial="close"
                  whileInView="open"
                  className="font-poppin text-lg md:text-xl font-semibold"
                >
                  {title}
                </motion.h1>
                <motion.p
                  variants={animateText}
                  initial="close"
                  whileInView="open"
                  className=" para-heading"
                >
                  {description}
                </motion.p>
              </div>
            </motion.div>
          </MagicCard>
        ))}
      </div>

      <TechSkills title={frontEnd.title} skill={frontEnd.skills} />
      <TechSkills title={backEnd.title} skill={backEnd.skills} />
      <TechSkills title={others.title} skill={others.skills} />
    </section>
  );
};

export default Skills;
