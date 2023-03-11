import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { technologies } from "@/Datas";
import { TypingText } from "./CustomTexts";
import {
  staggerContainer,
  textContainer,
  textVariant2,
  textVariant,
} from "@/motions";

const Skills = () => {
  return (
    <motion.div
      className="h-[60vh] mt-[100px] lg:mt-[200px] max-w-[1600px]  mx-auto"
      variants={staggerContainer(0.5, 0.2)}
      initial="hidden"
      animate="show"
    >
      <TypingText
        title="In these few years, I got acquainted with interesting technologies, you
        can see some of them here"
      />

      <motion.div
        className="flex flex-wrap justify-center gap-5 lg:gap-10 items-center"
        variants={textContainer}
        initial="hidden"
        animate="show"
      >
        {technologies.map((item) => (
          <motion.div
            className="w-[70px] h-[70px]  rounded-full mt-[80px] relative"
            variants={textVariant(1.1)}
            initial="hidden"
            animate="show"
          >
            <Image
              src={item.icon}
              alt={item.name}
              className="absolute w-full h-full rounded-full"
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Skills;
