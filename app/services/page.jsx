import React from "react";
import PageTitle from "@/components/PageTitle";
import Image from "next/image";

const services = [
  {
    picture: "/images/New-York.jpg",
    name: "New York",
    title: "Tree Service",
  },
  {
    picture: "/images/Atlanta.jpg",
    name: "Atlanta",

    title: "Tree Service",
  },
  {
    picture: "/images/London.jpg",
    name: "London",
    title: "Tree Service",
  },
  {
    picture: "/images/New-Orleans.jpg",
    name: "New Orleans",
    title: "Tree Service",
  },
  {
    picture: "/images/Miami.jpg",
    name: "Miami",
    title: "Tree Service",
  },
  {
    picture: "/images/Dallas.jpg",
    name: "Dallas",
    title: "Tree Service",
  },
];

const page = () => {
  return (
    <section className=" flex flex-col justify-center ">
      <div>
        <PageTitle title="Services" />
      </div>
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex justify-center items-center py-12">
          <div className="flex flex-col justify-center items-center">
            <div className="grid grid-cols-1 xl:grid-cols-3 grid-rows-2 gap-6">
              {services.map((service, index) => {
                return (
                  <a href="/" key={index} className="group">
                    <div className="relative">
                      {/* Wrapper div around the image */}
                      <div className="relative overflow-hidden border border-black">
                        <Image
                          src={service.picture}
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
                        <h3>{service.name}</h3>
                      </div>
                      <div className="border-green-800 border-b-2 w-16 "></div>
                      <div>
                        <p className="py-2">{service.title}</p>
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

export default page;
