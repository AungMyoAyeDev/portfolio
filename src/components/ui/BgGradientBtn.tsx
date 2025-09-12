import { motion } from "framer-motion";

import React from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";

const BggradientBtn = ({ text, link }: { text: string, link?: string }) => {
  return (
    <motion.a
      animate={{
        backgroundPosition: ["0% 50%", "100% 50%"],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        repeatType: "mirror",
        ease: "linear",
      }}
      style={{
        backgroundPosition: "200% 200%",
      }}
      href={link ? link : "#"}
      className="group text-lg overflow-hidden relative z-10 font-semibold font-poppin bg-gradient-to-r  from-orange-400 to-orange-500 rounded-full "
    >
      <motion.div
        initial="initial"
        whileHover="hover"
        className="flex items-center  gap-1 "
      >
        <motion.span className="relative z-10 flex items-center px-6 py-2 gap-1 transition-all duration-300 ease-in-out hover:text-black">
          {text}
          <FaArrowAltCircleRight />
        </motion.span>
        <span className="rounded-full absolute h-full w-0 group-hover:w-full bg-gradient-to-r from-orange-400 to-purple-500 transition-all duration-300 ease-in-out z-0"></span>
      </motion.div>
    </motion.a>
  );
};
export default BggradientBtn;
