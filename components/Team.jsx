import React from "react";
import Image from "next/image";

const items = [
  {
    picture: "/images/lumberjack-1-resize.jpg",
    name: "Eric Lopez",
    title: "Tree Service",
  },
  {
    picture: "/images/lumberjack-2-resize.jpg",
    name: "John Phillips",
    title: "Tree Service",
  },
  {
    picture: "/images/lumberjack-3-resize.jpg",
    name: "Lance Baker",
    title: "Tree Service",
  },
];

const Team = () => {
  return (
    <section className="bg-white">
      <div className="container mx-auto py-12">
        <div className="flex flex-col xl:flex justify-center items-center py-12">
          <div className="flex flex-col justify-center items-center">
            <div className="flex flex-col justify-center items-center p-6">
              <p className="py-2">Professional Land & Tree Maintenance</p>
              <div className="flex justify-center items-center border-green-800 border-b-2 w-16 "></div>
            </div>
            <div className="py-12">
              <h2>Our Lumberjacks</h2>
            </div>
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
              {items.map((item, index) => {
                return (
                  <a href="/" key={index} className="group">
                    <div className="relative">
                      {/* Wrapper div around the image */}
                      <div className="relative overflow-hidden">
                        <Image
                          src={item.picture}
                          height={400}
                          width={400}
                          alt=""
                          className="transition-all duration-500 ease-in-out"
                        />
                        {/* Black overlay directly on the image */}
                        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
                      </div>

                      {/* Image text content */}
                      <div className="py-2">
                        <h3>{item.name}</h3>
                      </div>
                      <div className="border-green-800 border-b-2 w-16 "></div>
                      <div>
                        <p className="py-2">{item.title}</p>
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
