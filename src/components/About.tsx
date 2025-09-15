"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import TextReveal from "./ui/TextReveal";
import Button from "./ui/Button";
import { contactLinks } from "@/constant";

const iconVarients = {
  initial: { opacity: 0, scale: 0 },
  visible: { opacity: 1, scale: 1 },
  transition: { staggerChildren: 0.4, delayChildren: 0.5, delay: 0.5 },
}
const About = () => {

  return (
    <section className="min-h-screen py-20 px-4 " id="about">
      <motion.h1
        initial={{ opacity: 0, y: 6 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeInOut", duration: .5 }}
        className="heading">About Me</motion.h1>
      {/* About conatiner  */}
      <motion.div

        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: .5, ease: "easeInOut", staggerChildren: 0.2, delayChildren: 0.2 }}
        className=" mx-auto mt-6 flex flex-col md:flex-row items-center justify-center gap-14 w-fit border-2 border-orange-400 rounded-lg py-12 px-12 bg-gray-800">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="relative" >

          <div className="w-60 h-60 md:w-72 md:h-72 rounded-full relative bg-purple-600 overflow-hidden z-10 ">

            <Image src={'/images/profile.png'} fill sizes="(max-width:768px)" alt="profile photo" className=" object-scale-down  " />
          </div>
          <div className="absolute -inset-2 border-t-2 border-orange-400 rounded-full  animate-spin" />
          <div className="absolute -inset-2 border-l-2 border-cyan-400 rounded-full  animate-spin " />
        </motion.div>


        <div className="max-w-xl flex flex-col gap-4 ">



          <TextReveal className="gap-1 text-lg md:text-xl font-lora text-center " words="I am a dedicated Full-Stack web developer and UI/UX designer from Myanmar , with a passion for building seamless digital experiences. Currently, I am pursuing my studies at Yadanabon University, while continuously enhancing my development and design skills through real-world projects." />

          <motion.a

            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            download
            href="/images/profile.png"
            className="md:self-end self-center"
          >
            <Button text="Download Resume" />
          </motion.a>
        </div>
        <motion.div
          variants={iconVarients}
          initial="initial"
          whileInView="visible"
          className="md:justify-self-end flex flex-row  md:flex-col gap-4">
          {contactLinks.map((item) => (
            <motion.a
              variants={iconVarients}
              initial="initial"
              whileInView="visible"
              whileHover={{ scale: 1.2 }}
              key={item.id}
              href={item.href}
              target="_blank"
              title={item.name}
              className="p-3  bg-cyan-400  rounded-full "
            >
              {item.icon}
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
