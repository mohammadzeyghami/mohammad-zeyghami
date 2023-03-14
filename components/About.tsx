import { aboutData } from "@/Datas";
import Image from "next/image";
import { motion } from "framer-motion";
import { slideIn } from "@/motions";
import { TypingText } from "./CustomTexts";
const About = () => {
  return (
    <div
      className="flex flex-col  mt-[200px] w-full  max-w-[1600px] mx-auto"
      id="About"
    >
      <h2 className="font-bold text-[35px] text-center mb-[80px] ">
        <TypingText title="About" textStyles="text-[40px]" />
      </h2>
      {aboutData.map((item) => (
        <motion.div
          variants={slideIn("", "", 0.3, 0.5)}
          initial="hidden"
          whileInView="show"
          className="flex flex-col justify-center items-center lg:flex-row w-full lg:justify-around mb-[50px]"
          key={item.title}
        >
          <Image
            src={item.img}
            alt={item.title}
            className="w-[380px] h-[300px]  object-cover lg:mr-[25px] xl:[100px] rounded-md"
          />

          <motion.div
            variants={slideIn("down", "", 0, 0.5)}
            initial="hidden"
            whileInView="show"
            className="mt-[50px] lg:0 "
          >
            <h3 className="text-center  text-[30px] font-bold mb-[20px]">
              {item.title}
            </h3>
            <p className="w-[380px]  lg:w-[600px] text-[#c8c7c7]  text-center font-semibold text-[20px]">
              {item.description}
            </p>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};

export default About;
