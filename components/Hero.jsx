"use client";

import React, { useState, useEffect } from "react";

const Hero = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const image = new Image();
    image.src = "/images/paint-hero-resize.jpg";
    image.onload = () => setImageLoaded(true);
  }, []);

  return (
    <>
      {/* <section
        className={`relative w-full h-[85vh] xl:h-screen bg-transparent bg-cover bg-center transition-opacity duration-500 ${
          imageLoaded ? "opacity-100" : "opacity-0"
        }`}
        style={{
          backgroundImage: imageLoaded ? 'url("/images/hero-image-2.jpg")' : "",
        }}
      > */}

      <section
        className="relative w-full h-[85vh] xl:h-screen bg-transparent bg-cover bg-center transition-opacity duration-500 opacity-100"
        style={{
          backgroundImage: 'url("/images/paint-hero-resize.jpg")',
        }}
      >
        {/* Dark overlay 1*/}
        <div className="absolute inset-0 bg-black opacity-30"></div>
        {/* Dark overlay 2*/}
        {/* <div className="absolute inset-0 bg-black opacity-40 w-[40%]"></div> */}

        {/* Content on top of the image */}
        <div className="container mx-auto relative z-10 text-white flex items-center justify-center h-full">
          <div className="flex flex-col xl:justify-start justify-center">
            <div className="flex flex-col xl:justify-start justify-center xl:items-start items-center ">
              <p className=" flex xl:justify-start xl:items-start items-center justify-center mt-4 text-lg py-2 ">
                Reliable, Safe, and Efficient Painting Services
              </p>
              <div className="flex xl:justify-start justify-center xl:items-start items-center border-[#00008B] border-b-2 w-16 "></div>
            </div>

            <h1 className="flex xl:justify-start justify-center text-center xl:text-left text-4xl font-bold xl:text-8xl xl:max-w-[900px]">
              Color Your World With Every Stroke
            </h1>

            <div className="flex xl:justify-start justify-center">
              <button className="button py-2">Get a Quote</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
