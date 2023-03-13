import React from "react";

const Footer = () => {
  return (
    <>
      <div className="w-full max-w-[1600px] bg-[#221A2E] h-[3px] mx-auto mb-[20px]  mt-[100px]"></div>
      <div className="flex flex-col md:flex-row w-full max-w-[1600px] mx-auto justify-around mb-[20px] ">
        <p className="text-[20px] text-center font-semibold  ">
          this website create by mohammad zeyghami in 2023
        </p>
        <p className="text-[20px] text-center font-semibold">
          phone | +989189563646
        </p>
      </div>
    </>
  );
};

export default Footer;
