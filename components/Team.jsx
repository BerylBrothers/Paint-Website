import React from "react";
import Image from "next/image";

const items = [
  {
    picture: "/images/lumberjack-1.jpg",
    name: "Eric Lopez",
    title: "Tree Service",
  },
  {
    picture: "/images/lumberjack-2.jpg",
    name: "John Phillips",
    title: "Tree Service",
  },
  {
    picture: "/images/lumberjack-3.jpg",
    name: "Lance Baker",
    title: "Tree Service",
  },
];

const Team = () => {
  return (
    <section className="bg-white">
      <div className="container mx-auto py-12">
        <div className="flex flex-col xl:flex justify-center items-center pt-12">
          <div className="flex flex-col justify-center items-center">
            <p className="font-normal">Professional Land & Tree Maintenance</p>
            <div className="py-12">
              <h2>Our Best Lumberjacks</h2>
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
                      <div className="py-3">
                        <h3>{item.name}</h3>
                      </div>
                      <div>
                        <p>{item.title}</p>
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
