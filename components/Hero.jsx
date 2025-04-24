"use client";

import React from "react";
import Image from "next/image";
import { Button } from "../components/ui/button";
import { FiDownload } from "react-icons/fi";
import Socials from "../components/Socials";

import Link from "next/link";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";

const Hero = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div
          className="flex flex-col xl:flex-row 
            items-center justify-between pt-6 xl:pt-8 xl:pb-24"
        >
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span></span>
            <h1 className="h1 mb-6">
              Trusted Painting <br />
              <span className="text-primary">Services</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white">
              Blending cutting-edge design with powerful development to craft
              unique, user-friendly custom coded websites that help your
              business thrive.{" "}
            </p>
            {/* button and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Link href={"/contact"}>
                <Button
                  variant="outline"
                  size="lg"
                  className="uppercase flex items-center gap-2 border-white text-white hover:bg-white hover:text-black"
                >
                  <span>Get In Touch</span>
                </Button>
              </Link>
              <div className="mb-8 xl:mb-0">
                <Socials containerStyles="flex gap-6" />
              </div>
            </div>
          </div>
          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
