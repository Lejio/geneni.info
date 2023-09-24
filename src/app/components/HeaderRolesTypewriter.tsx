import React, { useState } from "react";
import TypewriterComponent from "typewriter-effect";

export const HeaderRolesTypewriter = ({
  className,
}: {
  className: string | undefined;
}) => {
  const [followUp, setFollowUp] = useState(false);
  const roles = [
    "Software Developer",
    "Front End Engineer",
    "Back End Developer",
    "Python Developer",
    "Java Developer",
    "Typescript Enjoyer",
  ];
  return (
    <div className={`flex flex-row ${className ? className : ""}`}>
      <TypewriterComponent
        onInit={(typewriter) => {
          typewriter
            .typeString("I am a")
            .callFunction((state) => {
              state.elements.cursor.remove();
              setFollowUp(true);
            })
            .start();
        }}
      />
      <p>&nbsp;</p>
      {followUp ? (
        <TypewriterComponent
          options={{
            deleteSpeed: 20,
            loop: true,
          }}
          onInit={(typewriter) => {
            for (let r = 0; r < roles.length; r++) {
              typewriter.typeString(`${roles[r]}`).pauseFor(1000).deleteAll();
            }

            typewriter.start();
          }}
        />
      ) : (
        <></>
      )}
    </div>
  );
};
