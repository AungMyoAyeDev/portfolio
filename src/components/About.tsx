"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { animateText } from "./Skills";
import TextReveal from "./ui/TextReveal";
import Button from "./ui/Button";

// const imageVarient = {
//   initial: {
//     opacity: 0,
//     scale: 0,
//   },
//   inView: {
//     opacity: 1,
//     scale: 1,
//     transition: {
//       ease: "easeIn",
//       duration: 0.7,
//     },
//   },
//   animate: {
//     backgroundPosition: ["0% 50%", "100% 50%"],
//     transition: {
//       ease: "linear",
//       duration: 5,
//       repeat: Infinity,
//     },
//   },
// };

const About = () => {
  return (
    <section className="min-h-screen py-20 px-4 md:px-12 " id="about">
      <h1 className="heading">About Me</h1>
      <div className="flex flex-col md:flex-row justify-between  gap-8 py-8 ">
        <div className=" relative w-[90%] md:w-[40%] h-[40vh] md:h-[65vh]   mx-auto  bg-transparent   border-transparent bg-clip-border rounded-md bg-gradient-to-tr from-rose-500 via-amber-500 to-blue-600 ">
          <div className="abouslute  w-full h-full m-4 rounded-md z-40 border-2 bg-gray-700"></div>
          <Image
            src={"/images/profile.png"}
            fill
            alt="profile"
            className="object-cover relative z-20"
          />
          <span className="absolute inset-0 bg-cyan-500 z-0 rounded-md"></span>
        </div>
        <motion.div
          variants={animateText}
          initial="close"
          whileInView="open"
          className="w-[90%] md:w-[50%] flex flex-col gap-2 items-center md:items-start justify-between mx-auto"
        >
          <motion.h2
            variants={animateText}
            className="font-poppin text-xl md:text-2xl font-semibold"
          >
            Hi &#33; I am Aung Myo Aye
          </motion.h2>
          <TextReveal
            words="I am a dedicated Full-Stack web developer and UI/UX designer from
            Myanmar , with a passion for building seamless digital experiences.
            Currently, I am pursuing my studies at Yadanabon University, while
            continuously enhancing my development and design skills through
            real-world projects."
            className="font-lora text-base md:text-xl text-balance gap-1"
          />
          <TextReveal
            words="My expertise spans across a diverse range of technologies, including
            Bootstrap, SCSS, JavaScript, React, Next.js, Node.js, Express.js,
            Tailwind, jQuery, MongoDB, and MySQL. In addition, I leverage my
            design skills using Figma to craft intuitive and user-friendly
            interfaces"
            className="text-sm md:text-base font-lora text-balance gap-1 "
          />

          <a href="mailto:aungmyoaye101@gmail.com">
            <Button text="Download Resume" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
