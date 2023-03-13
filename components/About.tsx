import { aboutData } from "@/Datas";
import Image from "next/image";
const About = () => {
  return (
    <div className="flex flex-col  mt-[200px] w-full  max-w-[1600px] mx-auto">
      <h2 className="font-bold text-[35px] text-center mb-[80px]">
        {" "}
        About me{" "}
      </h2>
      {aboutData.map((item) => (
        <div
          className="flex flex-col justify-center items-center lg:flex-row w-full lg:justify-around mb-[50px]"
          key={item.title}
        >
          <Image
            src={item.img}
            alt={item.title}
            className="w-[380px] h-[300px]  object-cover lg:mr-[25px] xl:[100px] rounded-md"
          />

          <div className="mt-[50px] lg:0 ">
            <h3 className="text-center font-bold m text-[30px] mb-[20px]">
              {item.title}
            </h3>
            <p className="w-[380px]  lg:w-[600px] text-center font-semibold text-[20px]">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default About;
