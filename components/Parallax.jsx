"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

// Items
const items = [
  {
    image: "/images/tiny-image-1.jpg",
    action: "1 Request Us",
    description: "You can depend on our trained employees to provide service.",
  },
  {
    image: "/images/tiny-image-2.jpg",
    action: "2 Cutting Trees",
    description: "You can depend on our trained employees to provide service.",
  },
  {
    image: "/images/tiny-image-3.jpg",
    action: "3 Service Done",
    description: "You can depend on our trained employees to provide service.",
  },
];

const Parallax = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      requestAnimationFrame(() => setScrollY(window.scrollY));
    };

    setIsMobile(window.innerWidth <= 768);
    if (isMobile) {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (isMobile) {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, [isMobile]);

  const backgroundStyle = {
    backgroundImage: 'url("/images/logs.jpg")',
    backgroundSize: "cover",
    backgroundPosition: isMobile
      ? `center ${scrollY * 0.1}px`
      : "center center", // Apply scroll effect for mobile
    backgroundAttachment: isMobile ? "initial" : "fixed", // Fixed for desktop, initial for mobile
    transition: "background-position 0.2s ease-out",
  };

  return (
    <div
      className="relative w-full h-[70vh] xl:h-[50vh] bg-cover bg-bottom bg-no-repeat flex items-center py-12 justify-center"
      style={backgroundStyle}
    >
      <div className="absolute inset-0 bg-black opacity-80"></div>
      <section>
        <div className="container mx-auto text-center px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {items.map((item, index) => (
              <div
                className="flex flex-col justify-center items-center text-white z-10 group"
                key={index}
              >
                <div className="mb-4 opacity-50 transition-all duration-300 hover:opacity-100">
                  <div className="flex items-center justify-center gap-4 w-full">
                    <div className="relative w-10 h-10 xl:w-20 xl:h-20">
                      <Image
                        src={item.image}
                        alt=""
                        height={100}
                        width={100}
                        className="rounded-full object-cover"
                      />
                    </div>
                    <div className="flex flex-col justify-center">
                      <h3>{item.action}</h3>
                    </div>
                  </div>
                  <div className="border-t-2 border-white py-4 mt-4 sm:border-t-1 sm:py-2 md:border-t-2 md:py-4 transition-all duration-300 group-hover:border-green-800">
                    <p>{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Parallax;
