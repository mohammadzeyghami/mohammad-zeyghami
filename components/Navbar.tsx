import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { navVariants } from "../motions";
import profileImage from "../public/IMG_9071.jpg";
import { menuItems } from "@/Datas";
import { HiMenuAlt3 } from "react-icons/hi";
import { RiCloseFill } from "react-icons/ri";

const Navbar = () => {
  const [active, setActive] = useState(false);
  return (
    <motion.div
      variants={navVariants}
      initial="hidden"
      animate="show"
      className="fixed flex w-full px-[70px] justify-between items-center z-50 bg-black  "
    >
      <motion.a className="flex items-center" href="#Hero">
        <Image
          src={profileImage}
          className="w-[75px] h-[75px] object-cover rounded-full mr-[10px] "
          alt="profileImg"
        />
        <h3 className="font-semibold text-[18px]">mohammad zeyghami</h3>
      </motion.a>
      {!active && (
        <div
          className="block lg:hidden mt-[20px] relative"
          onClick={() => setActive(!active)}
        >
          <HiMenuAlt3 color="white" size={30} />
        </div>
      )}
      {active && (
        <div className="flex flex-col items-start mx-[5px] w-[80px] absolute top-0 text-center gap-4 right-5 bg-[#040016]">
          <div
            className="flex w-full justify-end cursor-pointer"
            onClick={() => setActive(!active)}
          >
            <RiCloseFill size={25} />
          </div>
          {menuItems.map((menuItem, index) => (
            <motion.a
              whileHover={{ scale: 1.2 }}
              key={index}
              className="text-[18px]  font-semibold"
              href={`#${menuItem}`}
            >
              {menuItem}
            </motion.a>
          ))}
        </div>
      )}

      <div className="hidden lg:flex justify-center items-center">
        {menuItems.map((menuItem, index) => (
          <motion.a
            whileHover={{ scale: 1.2 }}
            key={index}
            className="mx-[20px] text-[18px] font-semibold "
            href={`#${menuItem}`}
          >
            {menuItem}
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
};

export default Navbar;
