import React from "react";
import PageTitle from "@/components/PageTitle";
import Image from "next/image";

const services = [
  {
    picture: "/images/tree-removal-resize.jpg",
    name: "Tree Removal",
    title: "Tree Service",
  },
  {
    picture: "/images/tree-trimming-resize.jpg",
    name: "Tree Trimming",
    title: "Tree Service",
  },
  {
    picture: "/images/tree-health-assessment-resize.jpg",
    name: "Tree Health Assessments",
    title: "Tree Service",
  },
  {
    picture: "/images/storm-clean-up-resize.jpg",
    name: "Storm Clean Up",
    title: "Tree Service",
  },
  {
    picture: "/images/land-clearing-resize.jpg",
    name: "Land Clearing",
    title: "Tree Service",
  },
  {
    picture: "/images/tree-planting-resize.jpg",
    name: "Tree Planting",
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
        <div className="flex flex-col xl:flex justify-center items-center py-16">
          <div className="flex flex-col justify-center items-center py-16">
            <div className="grid grid-cols-1 xl:grid-cols-3 grid-rows-2 gap-6">
              {services.map((service, index) => {
                return (
                  <a href="/" key={index} className="group">
                    <div className="relative">
                      {/* Wrapper div around the image */}
                      <div className="relative overflow-hidden border border-black ">
                        <Image
                          src={service.picture}
                          height={400}
                          width={400}
                          alt=""
                          className="transition-all duration-500 ease-in-out"
                          objectFit="cover"
                        />
                        {/* Black overlay directly on the image */}
                        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
                      </div>

                      {/* Image text content */}
                      <div className="py-3">
                        <h3>{service.name}</h3>
                      </div>
                      <div className="border-[#00008B] border-b-2 w-16 "></div>
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
