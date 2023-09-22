"use client";

import React from "react";
import { TbSend } from "react-icons/tb";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";
import Link from "next/link";
import Personal_Logo from "@/assets/Personal_Logo";
import { NavItemType } from "@/types/NavItemType";

const NavbarComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems: Array<NavItemType> = [
    { title: "About", href: "#about", color: "foreground" },
    { title: "Experiences", href: "#experiences", color: "foreground" },
    { title: "Projects", href: "#projects", color: "foreground" },
  ];

  return (
    <Navbar
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      classNames={{
        wrapper: "max-w-full lg:mx-[10%]",
      }}
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>
      <NavbarContent className="sm:hidden" justify="center">
        <NavbarBrand>
          <Personal_Logo />
        </NavbarBrand>
      </NavbarContent>

      <NavbarBrand className="hidden sm:flex">
        <Personal_Logo />
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-20" justify="center">
        {menuItems.map((item, index) => {
          return (
            <NavbarItem key={`${item.title}-${index}`}>
              <Link
                className=" hover:text-light-purp duration-300"
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
          <Button
            as={Link}
            className="flex sm:hidden"
            color="primary"
            href="#contact"
            variant="light"
            size="lg"
            isIconOnly
          >
            <TbSend size={35} />
          </Button>
          <Button
            as={Link}
            className="hidden sm:flex"
            color="primary"
            href="#contact"
            variant="ghost"
          >
            <TbSend size={30} />
            Contact Me
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem
            key={`${item.title}-${index}`}
            className=" text-center py-[5%]"
          >
            <Link
              className="w-full my-[5%] justify-center"
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
