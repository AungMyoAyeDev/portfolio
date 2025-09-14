"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import React from "react";
import { animateText } from "./Skills";
import TextReveal from "./ui/TextReveal";
import Button from "./ui/Button";
import { contactLinks } from "@/constant";



const About = () => {
  const { scrollYProgress } = useScroll();
  const verticalLineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  return (
    <section className="min-h-screen py-20 px-4 ">
      <h1 className="heading">About Me</h1>
      <div className=" mx-auto mt-6 flex flex-col md:flex-row items-center justify-center gap-14 w-fit border-2 border-orange-400 rounded-lg py-12 px-12 bg-gray-800">
        <div >

          <div className="w-60 h-60 md:w-72 md:h-72 rounded-full relative bg-orange-400 overflow-hidden ">

            <Image src={'/images/profile.png'} fill alt="profile photo" className=" object-scale-down " />
          </div>
        </div>


        <div className="max-w-xl flex flex-col gap-4 ">



          <TextReveal className="gap-1 text-lg md:text-xl font-lora text-center " words="I am a dedicated Full-Stack web developer and UI/UX designer from Myanmar , with a passion for building seamless digital experiences. Currently, I am pursuing my studies at Yadanabon University, while continuously enhancing my development and design skills through real-world projects." />

          <a
            download
            href="/images/profile.png"
            className="md:self-end self-center"
          >
            <Button text="Download Resume" />
          </a>
        </div>
        <div className="md:justify-self-end flex flex-row  md:flex-col gap-4">
          {contactLinks.map((item) => (
            <a
              key={item.id}
              href={item.href}
              title={item.name}
              className="p-3  bg-cyan-400  rounded-full shadow-md  "
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
