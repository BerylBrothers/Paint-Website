import React from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import Nav from "../components/Nav";
import MobileNav from "./MobileNav";
import Image from "next/image";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Header = () => {
  return (
    <header className="sticky top-0 left-0 right-0 py-2 xl:py-2 text-white bg-green-800 border-b border-white z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <a
          href={"/"}
          title="test"
          className="flex justify-start items-center mr-10 h-[110px] w-[110px] xl:h-[150px] xl:w-[150px]"
        >
          <Image
            src={"/images/logo-transparent.png"}
            height={150}
            width={150}
            alt="Logo"
            className=""
          />
        </a>

        {/* Desktop nav & phone number */}
        <div className="hidden xl:flex justify-center gap-8 items-center w-full">
          {/* Centered Nav */}
          <Nav />
        </div>

        {/* Phone number */}
        <div className="hidden xl:flex justify-end items-center">
          {/* <span className="mr-2">
            {" "}
           
            <FaPhoneAlt />
          </span> */}
          <h3 className="whitespace-nowrap">9570 039 03904</h3>
        </div>

        {/* Mobile nav */}
        <div className="xl:hidden flex justify-between">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
