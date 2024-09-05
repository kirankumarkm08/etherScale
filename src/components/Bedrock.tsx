"use client";

import React from "react";
import Card from "./Card";
import Lottie from "react-lottie";
import Backgroundanimation from "/public/Animation/motion-background.json";

const Bedrock = () => {
  const data = [
    {
      name: "name1",
      description: "somthing",
      icon: "",
    },
    {
      name: "name2",
      description: "somthing",
      icon: "",
    },
    {
      name: "name3",
      description: "somthing",
      icon: "",
    },
    {
      name: "name4",
      description: "somthing",
      icon: "",
    },
  ];

  const animedata = {
    animationData: Backgroundanimation,
    loop: true,
    autoplay: true,
  };
  return (
    <div className="h-screen">
      <div className=" absolute opacity-70  ">
        <Lottie options={animedata} />
      </div>
      <div className="h-screen flex flex-col items-center relative">
        <div className=" w-[700px] text-white text-center items-center">
          <h1 className="text-[70px] font-bold">EtherScale Bedrock</h1>
          <h1 className="opacity-50">
            EtherScale Bedrock encapsulates security via AVS, chain-agnostic
            flexibility, decentralized architecture, and a modular design for
            adaptable ScaleApp development.
          </h1>
        </div>
        {/* <div className="">
          {data.map((data) => (
            <Card data={data} />
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default Bedrock;
