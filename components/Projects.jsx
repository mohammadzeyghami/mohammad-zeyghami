import React from "react";

const Projects = () => {
  return (
    <div className="flex flex-wrap">
      {Projects.map((project) => {
        <div className="flex flex-col gap-5 bg-[#221A2E] rounded-md">
          <Image
            src={project.image}
            alt={project.title}
            S
            className="w-[200px] h-[200px] relative rounded-md m-2"
          />
          <h4 className="absolute bottom-0 text-[#3F869C] font-semibold">
            {project.title}
          </h4>
        </div>;
      })}
    </div>
  );
};

export default Projects;
