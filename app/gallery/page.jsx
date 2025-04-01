import React from "react";
import PageTitle from "@/components/PageTitle";
import Image from "next/image";

const services = [
  {
    picture: "/images/tree-image-6-resize.jpg",
    name: "Tree Removal",
    title: "Tree Service",
  },
  {
    picture: "/images/gallery-1.jpg",
    name: "Tree Planting",
    title: "Tree Service",
  },
  {
    picture: "/images/gallery-2.jpg",
    name: "Tree Health Assessments",
    title: "Tree Service",
  },
  {
    picture: "/images/gallery-3.jpg",
    name: "Cabling and Bracing",
    title: "Tree Service",
  },
  {
    picture: "/images/gallery-4.jpg",
    name: "Land Clearing",
    title: "Tree Service",
  },
  {
    picture: "/images/gallery-5.jpg",
    name: "Tree Fertilization",
    title: "Tree Service",
  },
  {
    picture: "/images/gallery-6.jpg",
    name: "Tree Removal",
    title: "Tree Service",
  },
  {
    picture: "/images/gallery-7.jpg",
    name: "Tree Planting",
    title: "Tree Service",
  },
];

const page = () => {
  return (
    <section className=" flex flex-col justify-center ">
      <div>
        <PageTitle title="Gallery" />
      </div>
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex justify-center items-center py-16">
          <div className="flex flex-col justify-center items-center py-16">
            <div className="grid grid-cols-1 xl:grid-cols-2 grid-rows-2 gap-8">
              {services.map((service, index) => {
                return (
                  <a href="/" key={index} className="group">
                    <div className="relative">
                      {/* Wrapper div around the image */}
                      <div className="relative overflow-hidden border border-black">
                        <Image
                          src={service.picture}
                          height={600}
                          width={600}
                          alt=""
                          className="transition-all duration-500 ease-in-out"
                        />
                        {/* Black overlay directly on the image */}
                        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
                      </div>

                      {/* Image text content */}
                      {/* <div className="py-3">
                        <h3>{service.name}</h3>
                      </div>
                      <div className="border-green-800 border-b-2 w-16 "></div>
                      <div>
                        <p className="py-2">{service.title}</p>
                      </div> */}
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
