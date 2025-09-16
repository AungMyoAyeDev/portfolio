"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import TextReveal from "./ui/TextReveal";
import BgGradientBtn from "./ui/BgGradientBtn";
import Button from "./ui/Button";

const buttonVarients = {
  initial: {
    opacity: 0,
    y: 50,
  },
  inView: {
    opacity: 1,
    y: 0,
    transition: {
      delay: .5,
      ease: "linear",
      duration: .5
    },
  },
};


const Hero = () => {
  const intro = "Hi! I am Aung Myo Aye";
  const heroText =
    "A Full-Stack developer and UI/UX designer passionate about creating efficient, scalable web solutions.";

  // const tagline =
  //   "Crafting modern, responsive web applications with a touch of creativity.";

  return (<>
    <section className="min-h-screen flex flex-col-reverse md:flex-row justify-between items-center gap-6 py-20 px-4 md:px-8 overflow-hidden">
      <div className="w-full md:w-[50vw]  flex flex-col gap-4 items-center text-center md:text-start md:items-start relative z-10">
        <TextReveal
          words={intro}
          className="font-poppin text-base md:text-xl font-medium gap-1"
        />
        <TextReveal
          words={heroText}
          className="  font-poppin text-xl  md:text-3xl lg:text-4xl font-bold gap-2 justify-center  md:justify-start"
        />

        <motion.div
          variants={buttonVarients}
          initial="initial"
          whileInView="inView"
          className="flex flex-wrap gap-4 justify-center items-center mt-4"
        >


          <BgGradientBtn text="Get In Touch" link="mailto:example@gmail.com" />

          <a
            download="Aung_Myo_Aye_Resume.pdf"
            href="/images/Aung_Myo_Aye_Resume.pdf"
          >
            <Button text="Download Resume" />
          </a>
        </motion.div>




      </div>





      <div className="relative w-full md:w-[40vw]  ">
        <div className="relative size-40 sm:size-[250px] md:size-[300px] mx-auto">

          <Image
            src={"/images/profile.png"}
            fill
            sizes="(max-width:768px)"
            alt="Aung Myo Aye's profile photo"
            className={'object-cover object-center rounded-full relative z-20 animate-colorCycle border-4 border-purple-400 '}
          />

          <div className="absolute -inset-4 z-10 rounded-full animate-spin ">
            <Image

              src={'/rocket.png'}
              width={60}
              height={60}
              alt="Rocket icon"
              className="bg-transparent size-10 sm:size-12 md:size-16"
            />
          </div>
        </div>
      </div>


    </section>
    <video autoPlay
      loop
      muted
      playsInline className="absolute top-0 left-0 w-full h-full object-cover  aspect-video" >
      <source src="./video/space-video.mp4" type="video/mp4" />

    </video>
  </>
  );
};

export default Hero;
