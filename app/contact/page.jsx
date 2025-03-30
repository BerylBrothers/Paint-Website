import React from "react";
import PageTitle from "@/components/PageTitle";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const cards = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    info: "9570-039-03904",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    info: "123 oak st.",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    info: "Service@TreeCutting.com",
  },
];

const page = () => {
  return (
    <section className=" flex flex-col justify-center ">
      <div>
        <PageTitle title="Contact" />
      </div>
      <div className="flex justify-center items-center mx-auto container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-16">
          {cards.map((card, index) => {
            return (
              <div
                className="flex justify-center items-center border bg-green-800 text-white border-black h-[350px] w-[350px]"
                key={index}
              >
                <div className="flex flex-col justify-center items-center">
                  <h3 className="py-2">{card.icon}</h3>
                  <h3 className="py-2">{card.title}</h3>
                  <p>{card.info}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex xl:flex-row flex-col justify-between ">
        {/* text container */}
        <div className="relative flex xl:flex-row flex-col justify-center items-center border forest-bg-1 border-black  w-full xl:w-[50%] h-[70vh]">
          <div className="absolute inset-0 opacity-60 bg-green-300"></div>
        </div>

        {/* carousel container */}
        <div className="relative flex flex-col justify-center items-center w-full xl:w-[50%] forest-bg-2">
          <div className="absolute inset-0 opacity-60 bg-black "></div>
          {/* Display only the current testimonial */}
        </div>
      </div>
    </section>
  );
};

export default page;
