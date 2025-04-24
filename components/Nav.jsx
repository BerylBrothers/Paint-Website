"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import React from "react";

const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "about",
    path: "/about",
  },
  {
    name: "services",
    path: "/services",
  },
  {
    name: "gallery",
    path: "/gallery",
  },
  {
    name: "contact",
    path: "/contact",
  },
];

const Nav = () => {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <nav className="flex gap-8">
      {links.map((link, index) => {
        return (
          <Link
            href={link.path}
            key={index}
            className={`${
              link.path === pathname &&
              "text-[#00008B] border-b-2 border-[#00008B]"
            } capitalize font-medium hover:text-[#00008B] transition-all`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
