import React from "react";
import Image from "next/image";

const items = [
  {
    picture: "/images/New-York.jpg",
    name: "New York City",
    title: "New York",
  },
  {
    picture: "/images/Atlanta.jpg",
    name: "Atlanta",

    title: "Georgia",
  },
  {
    picture: "/images/London.jpg",
    name: "London",
    title: "England",
  },
  {
    picture: "/images/New-Orleans.jpg",
    name: "New Orleans",
    title: "Louisiana",
  },
  {
    picture: "/images/Miami.jpg",
    name: "Miami",
    title: "Florida",
  },
  {
    picture: "/images/Dallas.jpg",
    name: "Dallas",
    title: "Texas",
  },
];

const Areas = () => {
  return (
    <section className="bg-white">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex justify-center items-center py-6">
          <div className="flex flex-col justify-center items-center">
            <div className="flex flex-col justify-center items-center p-6">
              <p className="py-2">Professional Paint & House Maintenance</p>
              <div className="flex justify-center items-center border-[#00008B] border-b-2 w-16 "></div>
            </div>
            <div className="py-12">
              <h2>Areas We Service</h2>
            </div>
            <div className="grid grid-cols-1 xl:grid-cols-2 grid-rows-2 gap-6">
              {items.map((item, index) => {
                return (
                  <div href="/" key={index} className="group">
                    <div className="relative">
                      {/* Wrapper div around the image */}
                      <div className="relative overflow-hidden border border-black">
                        <Image
                          src={item.picture}
                          height={600}
                          width={600}
                          alt=""
                          className="transition-all duration-500 ease-in-out h-64 object-cover"
                        />
                        {/* Black overlay directly on the image */}
                        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
                      </div>

                      {/* Image text content */}
                      <div className="py-3">
                        <h3>{item.name}</h3>
                      </div>
                      <div className="border-[#00008B] border-b-2 w-16 "></div>
                      <div>
                        <p className="py-2">{item.title}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Areas;
