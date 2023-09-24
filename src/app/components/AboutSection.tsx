"use client";

import React, { useEffect } from "react";
import { useInView, useAnimation, motion } from "framer-motion";
import { Spacer } from "@nextui-org/react";
import Gene_Ni from "@/assets/gene_ni_pfp.jpg";
import Image from "next/image";

export const AboutSection = () => {
  return (
    <div className=" flex flex-col justify-center align-middle bg-white w-full h-[95vh] p-[10%]">
      <h2 id="about" className=" text-[5vw] text-center">
        <span className=" font-semibold bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 text-transparent bg-clip-text">
          Curiosity
        </span>{" "}
        is what drives me{" "}
        <span className=" italic font-semibold text-rose-500">Forward</span>.
      </h2>
      <Spacer y={10} />
      <div className=" flex xl:flex-row flex-col justify-center align-middle">
        <p className=" md:text-2xl text-sm">
          I am a junior studying Computer Science at the University of{" "}
          <span className=" text-maryland-red">Maryland</span>, College Park. I
          love building new projects. Starting from my freshman year I've been
          going to hackathons, learning new programming paradigms and
          materializing my{" "}
          <span className=" bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-transparent bg-clip-text">
            imaginations
          </span>{" "}
          into the world. I welcome you to take a peak into my journey as a
          aspiring{" "}
          <span className=" bg-green-600 text-transparent bg-clip-text">
            programmer
          </span>
          !
        </p>
        <Image
          className=" rounded-large xl:ml-[4%] md:max-h-[400px] mt-[10%] xl:mt-0"
          src={Gene_Ni}
          alt="Gene Ni"
          width={500}
          height={400}
        />
      </div>
    </div>
  );
};
