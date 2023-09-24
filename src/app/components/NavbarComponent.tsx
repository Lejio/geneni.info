"use client";

import React from "react";
import { TbSend } from "react-icons/tb";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";
import Link from "next/link";
import Personal_Logo from "@/assets/Personal_Logo";
import { NavItemType } from "@/types/NavItemType";
import { ContactButton } from "./ContactButton";
import { Inconsolata } from "next/font/google";

const inconsolata = Inconsolata({
  weight: "400",
  subsets: ["latin"],
  style: "normal",
});

const NavbarComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems: Array<NavItemType> = [
    { title: "About", href: "#about", color: "foreground" },
    { title: "Experiences", href: "#experiences", color: "foreground" },
    { title: "Projects", href: "#projects", color: "foreground" },
  ];

  return (
    <Navbar
      // shouldHideOnScroll
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      classNames={{
        wrapper: "max-w-full lg:mx-[10%] text-white",
      }}
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>
      <NavbarContent className="sm:hidden" justify="center">
        <NavbarBrand>
          {/* <Personal_Logo /> */}
          <h2 className={`${inconsolata.className} text-4xl`}>N I</h2>
        </NavbarBrand>
      </NavbarContent>

      <NavbarBrand className="hidden sm:flex">
        {/* <Personal_Logo /> */}
        <h2 className={`${inconsolata.className} text-4xl`}>N I</h2>
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-20" justify="center">
        {menuItems.map((item, index) => {
          return (
            <NavbarItem key={`${item.title}-${index}`}>
              <Link
                className="text-dark-purp hover:text-light-purp duration-300 xl:text-[1vw]"
                href={item.href}
              >
                {item.title}
              </Link>
            </NavbarItem>
          );
        })}
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <ContactButton
            as={Link}
            className="flex sm:hidden"
            color="dark-purp"
            href="#contact"
            variant="ghost"
            isIconOnly
          >
            <TbSend size={35} />
          </ContactButton>
          <ContactButton
            as={Link}
            className="hidden sm:flex"
            color="dark-purp"
            href="#contact"
            variant="ghost"
          >
            <TbSend size={30} />
            Contact Me
          </ContactButton>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem
            key={`${item.title}-${index}`}
            className=" text-center py-[5%]"
          >
            <Link
              className="w-full my-[5%] justify-center text-white"
              href={item.href}
              onClick={() => console.log(setIsMenuOpen(false))}
            >
              {item.title}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default NavbarComponent;
