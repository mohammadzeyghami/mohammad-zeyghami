import React from "react";
import { projects } from "@/Datas";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const Projects = () => {
  return (
    <motion.div className="flex flex-col z-20 mt-[100px]  max-w-[1600px]  mx-auto">
      <motion.h2 className="font-bold text-[35px] text-center ">
        Some of Projects i Build
      </motion.h2>
      <motion.div className="flex flex-wrap mt-[50px]">
        {projects.map((project) => (
          <Link href={`/projects/${project.Address}`} key={project.name}>
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="flex  gap-5 bg-[#221A2E] rounded-md w-[700px] h-[200px] cursor-pointer  m-5 "
            >
              <Image
                src={project.image[0]}
                alt={project.name}
                className=" h-full w-full max-w-[300px] rounded-md p-2  object-cover "
              />
              <div className="flex flex-col w-full text-center p-2 mt-2">
                <h3 className="font-semibold text-[20px] ">{project.name}</h3>
                <div className="flex items-center h-full">
                  <p className="">{project.Description}</p>
                </div>
              </div>
            </motion.div>
          </Link>
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
