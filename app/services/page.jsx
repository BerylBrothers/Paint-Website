import React from "react";
import PageTitle from "@/components/PageTitle";
import Image from "next/image";

const services = [
  {
    picture: "/images/interior-painting.jpg",
    name: "Interior Painting",
    title:
      "Interior painting enhances indoor spaces by applying paint to walls, ceilings, and trim. It allows for personalization through color choices and requires proper surface preparation for a smooth finish. A fresh coat can transform a room's atmosphere and make it more inviting.",
  },
  {
    picture: "/images/exterior-painting.jpg",
    name: "Exterior Painting",
    title:
      "Exterior painting protects and beautifies the outer surfaces of buildings, including walls and trim. It uses weather-resistant paints to withstand the elements. Proper preparation is crucial for durability, and a new exterior coat can significantly boost a property's curb appeal.",
  },
  {
    picture: "/images/commercial-painting.jpg",
    name: "Commercial Painting",
    title:
      "Commercial painting serves businesses and public spaces, focusing on larger-scale projects like offices and retail areas. It requires durable finishes and minimal disruption to operations. Professional application ensures a polished look that reflects the brand's identity.",
  },
  {
    picture: "/images/specialty-coating.jpg",
    name: "Specialty Coatings",
    title:
      "Specialty coating involves applying unique finishes for specific needs, such as anti-graffiti or fire-resistant coatings. These coatings provide enhanced protection and functionality, often used in industrial and high-traffic areas, requiring expert application for effectiveness.",
  },
  {
    picture: "/images/cabinet.jpg",
    name: "Cabinet Painting & Refinishing",
    title:
      "Cabinet painting and refinishing update the look of kitchen or bathroom cabinets without replacement. This process includes sanding and applying paint or stain, revitalizing spaces while extending cabinetry life and offering a modern aesthetic.",
  },
  {
    picture: "/images/deck-fence-painting.jpg",
    name: "Deck & Fence Painting",
    title:
      "Deck and fence painting enhances and protects outdoor wooden structures. It involves cleaning and applying weather-resistant stains or paints to prevent damage. A well-painted deck or fence improves outdoor aesthetics and increases longevity.",
  },
];

const page = () => {
  return (
    <section className=" flex flex-col justify-center ">
      <div>
        <PageTitle title="Services" />
      </div>
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex justify-center items-center">
          <div className="flex flex-col justify-center items-center py-16">
            <div className="grid grid-cols-1 xl:grid-cols-3 grid-rows-2 gap-6">
              {services.map((service, index) => {
                return (
                  <div href="/" key={index} className="group">
                    <div className="relative">
                      {/* Wrapper div around the image */}
                      <div className="relative overflow-hidden border border-black ">
                        <Image
                          src={service.picture}
                          height={400}
                          width={400}
                          alt=""
                          className="transition-all duration-500 ease-in-out object-cover w-full h-full"
                        />
                        {/* Black overlay directly on the image */}
                        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
                      </div>

                      {/* Image text content */}
                      <div className="py-3">
                        <h3 className="text-center">{service.name}</h3>
                      </div>
                      <div className="flex justify-center">
                        <div className="border-green-800 border-b-2 w-16 "></div>
                      </div>

                      <div className="flex justify-center">
                        <p className="py-2 text-center">{service.title}</p>
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

export default page;
