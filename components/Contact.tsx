import React from "react";
import { TypingText } from "./CustomTexts";
import { staggerContainer } from "@/motions";
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
    <div className="flex  mt-[200px] w-full max-w-[1600px] mx-auto ">
      <div className="w-full flex justify-around  mx-auto gap-[30px]  bg-[#221A2E] rounded-xl">
        <div className="flex w-full flex-col">
          <h2 className="text-center text-[28px] font-bold my-[30px]">
            You Can Find Me By A Click :
          </h2>
          <div className="flex flex-col w-full justify-center gap-[50px]">
            <motion.div
              variants={staggerContainer()}
              initial="hidden"
              whileInView="show"
              className="flex justify-center gap-10 w-full items-center"
            >
              <SiGithub size={60} />
              <TypingText title="you can check my projects codes here" />
            </motion.div>
            <motion.div
              variants={staggerContainer()}
              initial="hidden"
              whileInView="show"
              className="flex justify-center gap-10 w-full items-center"
            >
              <SiLinkedin size={60} />
              <TypingText title="you can check my projects codes here" />
            </motion.div>{" "}
            <motion.div
              variants={staggerContainer()}
              initial="hidden"
              whileInView="show"
              className="flex justify-center gap-10 w-full items-center"
            >
              <SiTelegram size={60} />
              <TypingText title="you can check my projects codes here" />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
