"use client";

import React from "react";
import TypewriterComponent from "typewriter-effect";

const Header = () => {
  return (
    <div>
      <TypewriterComponent
        onInit={(typewriter) =>
          typewriter.typeString("My name is Gene").start()
        }
      />
    </div>
  );
};

export default Header;
