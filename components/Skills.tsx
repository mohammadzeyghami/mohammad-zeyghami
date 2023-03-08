import React from "react";
import { motion } from "framer-motion";
import { technologies } from "@/Datas";
import BallCanvas from "../public/canvas/Ball";
import { TypingText } from "./CustomTexts";
import { staggerContainer, slideIn } from "../motions";
const Skills = () => {
  return (
    <motion.div
      variants={staggerContainer()}
      initial="hidden"
      animate="show"
      className="mb-[100px] flex flex-col"
    >
      <TypingText
        title="In these few years, I got to know different technologies, you can see
        some of them below"
        textStyles="text-center"
      />
      <motion.div
        variants={slideIn("down", "", 0.5, 1)}
        className="flex flex-row flex-wrap justify-center gap-10"
      >
        {technologies.map((technologie, index) => (
          <div className="w-28 h-28" key={technologie.name}>
            <BallCanvas icon={technologie.icon} />
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Skills;
