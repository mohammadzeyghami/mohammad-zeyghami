import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { technologies } from "@/Datas";

const Skills = () => {
  return (
    <motion.div className="h-[60vh] mt-[200px]">
      <motion.h2 className="text-center text-[22px] font-bold">
        In these few years, I got acquainted with interesting technologies, you
        can see some of them here
      </motion.h2>
      <motion.div className="flex flex-wrap justify-center items-center">
        {technologies.map((item) => (
          <motion.div className="w-[70px] h-[70px] bg-[white] rounded-full mt-[80px] relative">
            <item />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Skills;
