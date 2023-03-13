import React from "react";
import { TypingText } from "./CustomTexts";
import { staggerContainer, slideIn } from "@/motions";

import Image from "next/image";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { contact } from "@/Datas";
import "swiper/css";
import "swiper/css/pagination";
import {
  SiGithub,
  SiTelegram,
  SiInstagram,
  SiLinkedin,
  SiGmail,
} from "react-icons/si";

// import required modules
import { Pagination } from "swiper";

const Contact = () => {
  return (
    <div className="flex flex-col  mt-[200px] w-full max-w-[1600px] mx-auto ">
      <motion.h2
        variants={slideIn("up", "", 0.3, 0.5)}
        initial="hidden"
        whileInView="show"
        className="text-center text-[28px] font-bold my-[30px]"
      >
        You Can Find Me By A Click :
      </motion.h2>

      <div className="flex flex-wrap gap-[10px] w-full">
        <motion.a
          href="https://github.com/mohammadzeyghami"
          whileHover={{ scale: 1.1 }}
          variants={staggerContainer()}
          initial="hidden"
          whileInView="show"
          className="flex justify-center cursor-pointer my-[20px]  gap-10 mx-auto  bg-[#221A2E] rounded-xl  py-[40px] items-center w-[400px]"
        >
          <SiGithub size={60} />
          <TypingText title="github" />
        </motion.a>

        <motion.a
          href="https://www.linkedin.com/in/mohammad-zeyghami-811468259/"
          whileHover={{ scale: 1.1 }}
          variants={staggerContainer()}
          initial="hidden"
          whileInView="show"
          className="flex justify-center cursor-pointer gap-10 mx-auto my-[20px] bg-[#221A2E] rounded-xl  py-[40px] items-center w-[400px]"
        >
          <SiLinkedin size={60} />
          <TypingText title="Linkdin" />
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.1 }}
          variants={staggerContainer()}
          initial="hidden"
          whileInView="show"
          className="flex justify-center cursor-pointer my-[20px] gap-10 mx-auto  bg-[#221A2E] rounded-xl  py-[40px] items-center w-[400px]"
        >
          <SiGmail size={60} />
          <TypingText title="Gmail" />
        </motion.a>
      </div>
    </div>
  );
};

export default Contact;
