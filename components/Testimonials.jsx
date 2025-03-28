"use client";

import React, { useState } from "react";
import { PiCaretRightBold, PiCaretLeftBold } from "react-icons/pi";

// Array of items (testimonials)
const items = [
  {
    image: "/images/lumberjack-1.jpg",
    name: "John Doe",
    message: "This company provides amazing services! Highly recommend them.",
  },
  {
    image: "/images/lumberjack-2.jpg",
    name: "Ron Doe",
    message: "This company provides amazing services! Highly recommend them.",
  },
  {
    image: "/images/lumberjack-3.jpg",
    name: "Lawn Doe",
    message: "This company provides amazing services! Highly recommend them.",
  },
];

const Testimonials = () => {
  // State to keep track of the current index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the next testimonial
  const nextTestimonial = () => {
    if (currentIndex < items.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0); // Loop back to the first item
    }
  };

  // Function to go to the previous testimonial
  const prevTestimonial = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(items.length - 1); // Loop back to the last item
    }
  };

  return (
    <section className="pt-12">
      <div className=" mx-auto">
        <div className="flex xl:flex-row flex-col justify-between ">
          {/* text container */}
          <div className="relative flex xl:flex-row flex-col justify-center items-center border forest-bg-1 border-black  w-full xl:w-[50%] h-full">
            <div className="absolute inset-0 opacity-60 bg-green-300"></div>
            <div className="flex flex-col justify-center items-center text-center xl:text-left p-6 z-10">
              <h5 className="p-6">Professional Land & Tree Maintenance</h5>
              <h2 className="p-6 max-w-full xl:max-w-[400px] text-center">
                Tree Removal Is An Easy Task
              </h2>
              <p className="max-w-[600px] p-6">
                Higuera's tree service is proud to serve the community with
                competitive prices.
                <br />
                <br />
                Since the start of our company, we have strived to obtain the
                best quality tools so that the jobs are done to the highest
                standards.
              </p>
              <div className="p-6">
                <button
                  onClick={prevTestimonial}
                  className="text-white p-3 mx-2"
                >
                  <PiCaretLeftBold />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="text-white p-3 mx-2"
                >
                  <PiCaretRightBold />
                </button>
              </div>
            </div>
          </div>

          {/* carousel container */}
          <div className="relative flex flex-col justify-center items-center w-full xl:w-[50%] forest-bg-2">
            <div className="absolute inset-0 opacity-60 bg-black "></div>
            {/* Display only the current testimonial */}
            <div className="relative z-10">
              <div className="flex flex-col justify-center items-center text-center xl:text-left p-6 z-10 text-white">
                <h5 className="p-6">Professional Land & Tree Maintenance</h5>
                <h2 className="p-6 max-w-full xl:max-w-[350px] text-center">
                  Join Our Tree Service
                </h2>
                <p className="max-w-[600px] p-6">
                  Higuera's tree service is proud to serve the community with
                  competitive prices.
                  <br />
                  <br />
                  Since the start of our company, we have strived to obtain the
                  best quality tools so that the jobs are done to the highest
                  standards.
                </p>
                <div className="">
                  <a href="#" className="button z-10">
                    Hover me
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

{
  /* Render only the current testimonial */
}
//  <div key={currentIndex} className="testimonial-slide">
//  <img
//    src={items[currentIndex].image}
//    alt={items[currentIndex].name}
//    className="w-full h-60 object-cover rounded-lg mb-4"
//  />
//  <h3 className="font-bold text-xl">
//    {items[currentIndex].name}
//  </h3>
//  <p className="text-gray-600">{items[currentIndex].message}</p>
// </div>
