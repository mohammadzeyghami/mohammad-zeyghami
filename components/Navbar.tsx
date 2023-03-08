import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { navVariants } from "../motions";
import profileImage from "../public/IMG_9071.jpg";
import { menuItems } from "@/Datas";

const Navbar = () => {
  return (
    <motion.div
      variants={navVariants}
      initial="hidden"
      animate="show"
      className="fixed flex w-full px-[70px] justify-between "
    >
      <div className="flex items-center">
        <Image
          src={profileImage}
          className="w-[75px] h-[75px] object-cover rounded-full mr-[10px] "
          alt="profileImg"
        />
        <h3 className="font-semibold text-[18px]">mohammad zeighami</h3>
      </div>

      <div className="flex justify-center items-center">
        {menuItems.map((menuItem, index) => (
          <a key={index} href={`#${menuItem}`}>
            {menuItem}
          </a>
        ))}
      </div>
    </motion.div>
  );
};

export default Navbar;
