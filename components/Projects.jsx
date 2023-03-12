import React from "react";
import { projects } from "@/Datas";
import Image from "next/image";
import { motion } from "framer-motion";
import { BsGithub } from "react-icons/bs";
import { FaEye } from "react-icons/fa";
import Link from "next/link";

const Projects = () => {
  return (
    <motion.div className="flex flex-col  mt-[200px]  max-w-[1600px]  mx-auto">
      <motion.h2 className="font-bold text-[35px] text-center ">
        Some of Projects i Build
      </motion.h2>
      <motion.div className="flex flex-wrap mt-[50px]">
        {projects.map((project) => (
          <motion.div className="flex flex-col lg:flex-row gap-5 bg-[#221A2E] rounded-md max-w-[700px] max-h-[700px]   m-5 ">
            <Image
              src={project.image[0]}
              alt={project.name}
              className=" h-full w-full max-w-[300px] mx-auto rounded-md p-2  object-cover "
            />
            <div className="flex flex-col w-full text-center p-2 mt-2">
              <h3 className="font-semibold text-[20px] ">{project.name}</h3>
              <div className="flex items-center h-[60%] ">
                <p className="">{project.Description}</p>
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
                  href={"www.google.com"}
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
