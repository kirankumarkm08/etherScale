"use client";
import React from "react";
import Lottie from "react-lottie";
import Heroanimation from "/public/Animation/Heroanimation.json";

const Hero = () => {
  const data = {
    animationData: Heroanimation,
    loop: true,
    autoplay: true,
  };
  return (
    <div>
      <div className="flex flex-col gap-y-3 h-screen  mx-3 pl-36 justify-center relative ">
        <h1 className="text-5xl font-bold  w-[100px] text-white ">
          Build ScaleApps
        </h1>
        <h2 className="text-white w-[500px] ">
          EtherScale is a Chain-agnostic Rollup-as-a-Service secured by the
          Eigen AVS ecosystem.
        </h2>
      </div>
      <div className=" absolute top-1  h-screen opacity-30">
        <Lottie options={data} />
      </div>
    </div>
  );
};

export default Hero;
