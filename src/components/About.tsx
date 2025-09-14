"use client";
import { motion, useScroll, useTransform } from "framer-motion";
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
const textVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

// Animation variants for the timeline dots to pop in.
const dotVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "backOut" } }
};
const About = () => {
  const { scrollYProgress } = useScroll();
  const verticalLineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  return (
    <section className="section-container">
      <h1 className="heading">About Me</h1>
    </section>
  );
};

export default About;
