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
    <div className=" flex flex-row w-[100vw] h-[95vh] text-white">
      <div className=" w-[50%]">
        <div className=" flex flex-col">
          <TypewriterComponent
            onInit={(typewriter: TypewriterClass) => {
              typewriter
                .typeString("Hi,")
                .callFunction((state: TypewriterState) => {
                  state.elements.cursor.remove();
                  setSayName(true);
                })
                .start();
            }}
          />
          {sayName ? (
            <h1 className=" text-7xl">
              <TypewriterComponent
                onInit={(typewriter: TypewriterClass) => {
                  typewriter
                    .typeString("I'm Gene")
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
        </div>
        <p>&nbsp;</p>
        {greeting ? <HeaderRolesTypewriter /> : <></>}
      </div>
      <div className=" w-[50%]">
        <Image
          src={tech_stack}
          className=" w-full"
          width={100}
          height={100}
          alt="Alt-image"
        />
      </div>
    </div>
  );
};

export default Header;
