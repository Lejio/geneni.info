"use client";

import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Spacer,
  Chip,
} from "@nextui-org/react";
import Image from "next/image";
import JHU_LOGO from "@/assets/JHU_APL_logo.png";
import AIAA_LOGO_WHITE from "@/assets/Aiaa_logo_white_2.png";
import LANDING_GEAR from "@/assets/landing_gear_concept.png";
import PLANE_TOP from "@/assets/top_view_of_plane_concept.png";
import JHU_GENE from "@/assets/JHUAPL_Presentation.jpg";
import { BsCheckCircleFill } from "react-icons/bs";

export const TimelineSection = () => {
  return (
    <div className=" text-white">
      <div id="experiences" className=" w-screen">
        <div className=" w-screen h-screen bg-white text-[#022C6E] flex flex-col items-center justify-center">
          <Image
            className=" object-contain md:w-[10vh]"
            src={JHU_LOGO}
            alt="JHUAPL Logo"
            width={100}
            height={100}
          />
          <h2 className=" md:text-3xl text-sm text-center font-semibold">
            JOHNS HOPKINS UNIVERSITY APPLIED PHYSICS LABORATORY
          </h2>
          <Spacer y={10} />
          <div className=" flex flex-row md:max-w-[60vh] max-w-[80vw] align-middle items-center justify-center">
            <Card>
              <CardHeader>
                <div className=" flex flex-row align-middle items-center">
                  <h3 className=" md:text-2xl text-xs">
                    CIRCUIT Research Intern
                  </h3>
                  <Spacer x={5} />
                  <Chip
                    startContent={<BsCheckCircleFill size={20} />}
                    variant="flat"
                    color="success"
                  >
                    Completed
                  </Chip>
                </div>
              </CardHeader>
              <CardBody>
                <div className=" flex flex-col justify-center items-center align-middle">
                  <p className=" text-xs md:text-base">
                    Designed and built a GUI for calculating the radiometric
                    math model using the PyQt framework. Also used the
                    Xlsxwriter library, along with Pandas to conduct all the
                    calculations. Worked on determining the lunar SNR for the
                    camera that will be used on the Lunar Vertex Mission.
                    Conducted magnetometer testing and calibrations.
                  </p>
                  <Image
                    className=" py-[5%] md:object-contain md:w-[95%]"
                    src={JHU_GENE}
                    alt="Presenting at CIRCUIT fair"
                    width={1024}
                    height={683}
                  />
                </div>
              </CardBody>
              <CardFooter>
                <div className=" flex flex-row w-screen align-middle items-center justify-between">
                  <h4 className=" text-xs md:text-sm">March 2022 - May 2023</h4>
                  <div className=" text-xs md:text-sm">(Logos)</div>
                </div>
              </CardFooter>
            </Card>
          </div>
        </div>
        <div className=" w-screen h-screen flex flex-col items-center justify-center">
          <Image
            src={AIAA_LOGO_WHITE}
            className=" object-contain w-[15vh]"
            alt="AIAA Logo"
            width={492}
            height={129}
          />
          <h2 className="  md:text-3xl text-sm text-center font-semibold">
            DESIGN &middot; BUILD &middot; FLY
          </h2>
          <Spacer y={10} />
          <div className=" flex flex-row md:max-w-[60vh] max-w-[80vw] align-middle items-center justify-center">
            <Card>
              <CardHeader>
                <div className=" flex flex-row align-middle items-center">
                  <h3 className=" md:text-2xl text-xs">Structures Team Lead</h3>
                  <Spacer x={5} />
                  <Chip
                    startContent={<BsCheckCircleFill size={20} />}
                    variant="flat"
                    color="success"
                  >
                    Completed
                  </Chip>
                </div>
              </CardHeader>
              <CardBody>
                <div className=" flex flex-col justify-center items-center align-middle">
                  <p className=" text-xs md:text-base">
                    Managed the structures team for UMBC&apos;s AIAA competition
                    aircraft. Designed the aircraft in solidworks 3D. Personally
                    implemented the aircrafts design to resemble that of a
                    taildragger for better and easier delivery of cargo. Also
                    designed the landing gear of the aircraft
                  </p>
                  <div className=" flex flex-row justify-evenly">
                    <Image
                      className=" py-[5%] object-contain w-[45%]"
                      src={LANDING_GEAR}
                      alt="Presenting at CIRCUIT fair"
                      width={960}
                      height={960}
                    />
                    <Image
                      className=" py-[5%] object-contain w-[45%] rounded-large"
                      src={PLANE_TOP}
                      alt="Presenting at CIRCUIT fair"
                      width={960}
                      height={960}
                    />
                  </div>
                </div>
              </CardBody>
              <CardFooter>
                <div className=" flex flex-row w-screen align-middle items-center justify-between">
                  <h4 className=" text-xs md:text-sm">
                    October 2021 - June 2022
                  </h4>
                  <div className=" text-xs md:text-sm">(Logos)</div>
                </div>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
      <div id="projects" className=" w-screen">
        <div className=" w-screen h-screen flex items-center justify-center">
          <h2>SOPHÉR</h2>
        </div>
        <div className=" w-screen h-screen flex items-center justify-center">
          <h2>DISCOREON</h2>
        </div>
        <div className=" w-screen h-screen flex items-center justify-center">
          <h2>YU-GI-DEX</h2>
        </div>
        <div className=" w-screen h-screen flex items-center justify-center">
          <h2>INTERACTIVE CASE COMPETITION 2022</h2>
        </div>
        <div className=" w-screen h-screen flex items-center justify-center">
          <h2>THE LOCKER</h2>
        </div>
      </div>
    </div>
  );
};
