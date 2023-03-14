import React from "react";
import { motion } from "framer-motion";
import { staggerContainer } from "@/motions";
import { SiGithub, SiGmail, SiLinkedin } from "react-icons/si";
const Footer = () => {
  return (
    <>
      <div className="w-full max-w-[1600px] bg-[#221A2E] h-[3px] mx-auto mb-[20px]  mt-[100px]"></div>
      <div className="flex flex-col md:flex-row w-full max-w-[1600px] mx-auto justify-around items-center mb-[20px] ">
        <p className="text-[20px] text-center font-semibold  ">
          this website create by mohammad zeyghami in 2023
        </p>

        <p className="text-[20px] text-center font-semibold">
          Phone : +989189563646
        </p>
        <div className="flex ">
          <motion.a
            href="https://github.com/mohammadzeyghami"
            whileHover={{ scale: 1.3 }}
            variants={staggerContainer()}
            initial="hidden"
            whileInView="show"
            className="flex flex-col justify-center cursor-pointer my-[20px] items-center h-[80px] w-[80px]"
          >
            <SiGithub size={30} />
          </motion.a>
          <motion.a
            onClick={() => window.open("mailto:mohammadzeighami192@gmail.com")}
            whileHover={{ scale: 1.3 }}
            variants={staggerContainer()}
            initial="hidden"
            whileInView="show"
            className="flex flex-col justify-center cursor-pointer my-[20px] items-center h-[80px] w-[80px]"
          >
            <SiGmail size={30} />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/mohammad-zeyghami-811468259/"
            whileHover={{ scale: 1.3 }}
            variants={staggerContainer()}
            initial="hidden"
            whileInView="show"
            className="flex flex-col justify-center cursor-pointer my-[20px] items-center h-[80px] w-[80px]"
          >
            <SiLinkedin size={30} />
          </motion.a>
        </div>
      </div>
    </>
  );
};

export default Footer;
