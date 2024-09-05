"use client";
import React from "react";
import Image from "next/image";
import etherscale from "/public/Images/etherScale.svg";
import Link from "next/link";

const Nav = () => {
  return (
    <div>
      <div className=" fixed flex w-full mx-10 my-10 ">
        <Link href="/">
          <Image src={etherscale} alt="EtherScale" width={200} height={50} />
        </Link>
      </div>
    </div>
  );
};

export default Nav;
