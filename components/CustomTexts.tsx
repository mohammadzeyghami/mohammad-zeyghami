"use client";

import { motion } from "framer-motion";
import { textContainer, textVariant2 } from "../motions";

type TextType = {
  title?: string;
  textStyles?: string;
};

export const TypingText = ({ title, textStyles }: TextType) => (
  <motion.p
    variants={textContainer}
    className={`text-center text-[22px] font-bold text-secondary-white ${textStyles}`}
  >
    {title &&
      Array.from(title).map((letter, index) => (
        <motion.span variants={textVariant2} key={index}>
          {letter === " " ? "\u00a0" : letter}
        </motion.span>
      ))}
  </motion.p>
);

export const TitleText = ({ title, textStyles }: TextType) => (
  <motion.h2
    variants={textVariant2}
    initial="hidden"
    animate="show"
    className={`${textStyles} mt-[8px] font-bold md:text-[68px] text-[40px] text-[white] `}
  >
    {title}
  </motion.h2>
);
