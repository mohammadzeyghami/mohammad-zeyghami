import React from "react";
import { projects } from "@/Datas";
import Image from "next/image";
import { motion } from "framer-motion";
import { BsGithub } from "react-icons/bs";
import { FaEye } from "react-icons/fa";
import { slideIn } from "@/motions";
import { TypingText } from "./CustomTexts";
import { staggerContainer } from "@/motions";

const Projects = () => {
  return (
    <motion.div
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      className="flex flex-col mt-[200px] max-w-[1600px] mx-auto"
      id="Projects"
    >
      <TypingText title="Some of Projects i Build" textStyles="text-[30px]" />

      <motion.div className="flex flex-wrap mt-[50px] gap-[20px]">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            variants={slideIn("", "", 0.3, 0.5)}
            initial="hidden"
            whileInView="show"
            className="flex flex-col  gap-5 bg-[#221A2E] mx-auto rounded-md w-[300px] h-[600px]  md:w-[500px] md:h-[530px]   m-5 "
          >
            <Image
              src={project.image[0]}
              alt={project.name}
              className=" w-[450px] h-[250px] mx-auto rounded-md p-3  object-cover "
            />
            <div className="flex flex-1 flex-col w-full text-center p-2 mt-2">
              <h3 className="font-semibold text-[20px] ">{project.name}</h3>
              <div className="flex items-center h-[60%] ">
                <p className="w-full">{project.Description}</p>
              </div>
              <div className="flex w-full justify-center mt-4 gap-8">
                <motion.div
                  whileHover={{ scale: 1.4 }}
                  className="cursor-pointer"
                >
                  <a href={project.Github}>
                    <BsGithub size={30} />
                  </a>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.4 }}
                  className="cursor-pointer"
                >
                  <a href={project.Address}>
                    <FaEye size={30} />
                  </a>
                </motion.div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};
export async function getStaticPaths() {
  const paths = projects.map((item) => {
    return {
      params: {
        postId: `${item.Address}`,
      },
    };
  });
}

export default Projects;
