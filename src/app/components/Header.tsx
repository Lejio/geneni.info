"use client";

import React, { useState } from "react";
import TypewriterComponent, {
  TypewriterClass,
  TypewriterState,
} from "typewriter-effect";
import Image from "next/image";
import { HeaderRolesTypewriter } from "./HeaderRolesTypewriter";
import tech_stack from "@/assets/tech_stack.svg";

const Header = () => {
  const [greeting, setGreeting] = useState(false);
  const [sayName, setSayName] = useState(false);

  return (
    <div className=" flex flex-col w-[100vw] justify-start md:justify-center md:align-middle md:h-[95vh] h-[81vh] text-white">
      <div className=" flex md:flex-row  flex-col justify-evenly align-middle">
        <div className=" flex flex-col md:w-[50%] h-[50vw] align-middle pt-[5%] ml-[5%] md:mb-0">
          <span className=" md:text-[5vw] text-[10vw]">
            <TypewriterComponent
              onInit={(typewriter: TypewriterClass) => {
                typewriter
                  .typeString("Hi!")
                  .callFunction((state: TypewriterState) => {
                    state.elements.cursor.remove();
                    setSayName(true);
                  })
                  .start();
              }}
            />
          </span>
          {sayName ? (
            <h1 className=" md:text-[7vw] text-[15vw]">
              <TypewriterComponent
                onInit={(typewriter: TypewriterClass) => {
                  typewriter
                    .typeString("I'm Gene.")
                    .callFunction((state: TypewriterState) => {
                      state.elements.cursor.remove();
                      setGreeting(true);
                    })
                    .start();
                }}
              />
            </h1>
          ) : (
            <></>
          )}
          <p>&nbsp;</p>
          {greeting ? (
            <HeaderRolesTypewriter className=" md:text-[2vw] text-[5vw]" />
          ) : (
            <></>
          )}
        </div>
        <div className=" md:w-[50%] w-full p-[8%] md:p-[2%] pb-0">
          <Image
            src={tech_stack}
            className=" w-full mt-[5%] md:mt-0"
            width={100}
            height={100}
            alt="Alt-image"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
