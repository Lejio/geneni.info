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
import dynamic from "next/dynamic";
import JHU_LOGO from "@/assets/JHU_APL_logo.png";
import AIAA_LOGO_WHITE from "@/assets/Aiaa_logo_white_2.png";
import LANDING_GEAR from "@/assets/landing_gear_concept.png";
import PLANE_TOP from "@/assets/top_view_of_plane_concept.png";
import SOPHER_FEATHER from "@/assets/sopher_feather.png";
import SOPHER_IPHONE from "@/assets/Sopher_Iphone.png";
import JHU_GENE from "@/assets/JHUAPL_Presentation.jpg";
import {
  BsCheckCircleFill,
  BsFillCircleFill,
  BsTrophyFill,
  BsCodeSquare,
} from "react-icons/bs";

const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

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
            <span className=" text-[#1C3C6D]">DESIGN</span> &middot; BUILD
            &middot; <span className=" text-[#F1C318]">FLY</span>
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
        <div className=" w-screen h-screen flex flex-col items-center justify-center">
          <Image
            src={SOPHER_FEATHER}
            className=" object-contain w-[10vh]"
            alt="Sopher Logo"
            width={1300}
            height={1360}
          />
          <h2 className="  md:text-5xl text-lg text-center font-semibold">
            SOPHÉR
          </h2>
          <Spacer y={10} />
          <div className=" flex flex-row md:max-w-[60vh] max-w-[80vw] align-middle items-center justify-center">
            <Card>
              <CardHeader>
                <div className=" flex md:flex-row flex-col align-middle items-center">
                  <h3 className=" md:text-2xl text-lg">Front End Engineer</h3>
                  <div className=" md:flex md:flex-row">
                    <Spacer className="block md:hidden" y={5} />
                    <Spacer className="hidden md:block" x={5} />
                    <Chip
                      startContent={<BsFillCircleFill size={20} />}
                      variant="flat"
                      color="warning"
                    >
                      Active
                    </Chip>
                    <Spacer className="hidden md:block" x={5} />
                    <Chip
                      startContent={<BsCodeSquare size={20} />}
                      variant="flat"
                      color="secondary"
                    >
                      HopHacks 2023
                    </Chip>
                    <Spacer className="hidden md:block" x={5} />
                    <Chip
                      startContent={<BsTrophyFill size={20} />}
                      variant="flat"
                      color="default"
                    >
                      Runner Up
                    </Chip>
                  </div>
                </div>
              </CardHeader>
              <CardBody>
                <div className=" flex flex-col justify-center items-center align-middle">
                  <p className=" text-xs md:text-base">
                    Designed and built an application using Next.js 13 and
                    Capacitor by Ionic, that allows users to scan medical
                    documents and auto fills their information to each of the
                    respective fields. Used Google Document API and ChatGPT 3.5
                    turbo to effectively prompt engineer the correct responses
                    when given a field question.
                  </p>
                  <Spacer className="md:hidden block" y={5} />
                  <div className=" flex flex-row justify-evenly align-middle items-center w-full">
                    <div className=" md:hidden block">
                      <ReactPlayer
                        className="object-contain"
                        url={"https://www.youtube.com/watch?v=QsDIAG6wU1s"}
                        width="100%"
                        height="50%"
                        controls={true}
                      />
                    </div>
                    <div className=" md:block hidden">
                      <ReactPlayer
                        className="object-contain"
                        url={"https://www.youtube.com/watch?v=QsDIAG6wU1s"}
                        width="100%"
                        controls={true}
                      />
                    </div>

                    <div className=" object-contain w-[30%] hidden md:block pl-[5%]">
                      <Image
                        className=" "
                        src={SOPHER_IPHONE}
                        alt="Sopher demo iPhone"
                        width={331}
                        height={666}
                      />
                    </div>
                  </div>
                </div>
              </CardBody>
              <CardFooter>
                <div className=" flex flex-row w-screen align-middle items-center justify-between">
                  <h4 className=" text-xs md:text-sm">September 2023</h4>
                  <div className=" text-xs md:text-sm">(Logos)</div>
                </div>
              </CardFooter>
            </Card>
          </div>
        </div>
        {/* <div className=" w-screen h-screen flex items-center justify-center">
          <h2 className="  md:text-3xl text-sm text-center font-semibold">
            DISCOREON
          </h2>
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
        <div className=" w-screen h-screen flex items-center justify-center">
          <h2 className=" md:text-3xl text-sm text-center font-semibold">
            YU-GI-DEX
          </h2>
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
        <div className=" w-screen h-screen flex items-center justify-center">
          <h2 className=" md:text-3xl text-sm text-center font-semibold">
            INTERACTIVE CASE COMPETITION 2022
          </h2>
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
        <div className=" w-screen h-screen flex items-center justify-center">
          <h2 className=" md:text-3xl text-sm text-center font-semibold">
            THE LOCKER
          </h2>
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
        </div> */}
      </div>
    </div>
  );
};
