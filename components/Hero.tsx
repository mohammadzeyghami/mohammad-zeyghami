import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { HeroDescription } from "@/Datas";
import heroImage from "../public/hero.jpg";
import { slideIn } from "../motions";
const Hero = () => {
  return (
    <motion.div
      id="Hero"
      className="mx-auto w-full max-w-[600px]  xl:max-w-[1600px] flex flex-col xl:flex-row justify-center items-center gap-5  bg-color"
    >
      <motion.div
        variants={slideIn("left", "", "", 1)}
        initial="hidden"
        animate="show"
        className=" w-full  max-h-[700px] h-full  "
      >
        <Image
          src={heroImage}
          alt="profileImage"
          className=" object-cover w-full px-[10px] max-h-[700px]  rounded-2xl "
        />
      </motion.div>
      <motion.div
        variants={slideIn("right", "", "", 1)}
        initial="hidden"
        animate="show"
        className="lg:text-[22px] text-[18px] font-semibold text-center flex items-center my-[100px] justify-center"
      >
        <h5>{HeroDescription}</h5>
      </motion.div>
    </motion.div>
  );
};

export default Hero;
