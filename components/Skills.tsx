import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { technologies } from "@/Datas";
import { slideIn } from "@/motions";
import { textVariant } from "@/motions";

const Skills = () => {
  return (
    <div
      className=" mt-[100px]  lg:mt-[200px] max-w-[1600px]  mx-auto"
      id="Skills"
    >
      <motion.h2
        variants={slideIn("left", "", 0.3, 0.5)}
        className="text-center text-[28px] font-bold"
        initial="hidden"
        whileInView="show"
      >
        In these few years, I got acquainted with interesting technologies, you
        can see some of them here
      </motion.h2>

      <motion.div
        className="flex max-h-[600px] flex-wrap min-w-[100px]  flex-1 justify-center gap-5 lg:gap-10 items-center"
        variants={slideIn("up", "", "", 0.8)}
        initial="hidden"
        whileInView="show"
      >
        {technologies.map((item) => (
          <motion.div
            key={item.name}
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
    </div>
  );
};

export default Skills;
