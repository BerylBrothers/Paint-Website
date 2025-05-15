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
    <section className="">
      <div className=" mx-auto">
        <div className="flex xl:flex-row flex-col justify-between ">
          {/* text container */}
          <div className="relative flex xl:flex-row flex-col justify-center items-center border forest-bg-1 border-black  w-full xl:w-[50%] h-[85vh] xl:h-[70vh]">
            <div className="absolute inset-0 opacity-60 bg-blue-300"></div>
            <div className="flex flex-col justify-center items-center text-center xl:text-left p-6 z-10">
              <h2 className="p-6 max-w-full xl:max-w-[800px] text-center">
                Committed To Exceeding
                <br />
                Your Expectations
              </h2>
              <p className="max-w-[600px] p-6">
                At our painting company, we focus on fostering strong
                relationships with our clients by offering tailored services and
                attentive support. Our dedicated team takes the time to
                understand your specific painting needs, ensuring you feel
                valued and informed throughout the entire process.
                <br />
                <br />
                We pride ourselves on clear communication, prompt responses, and
                a steadfast commitment to delivering exceptional results. Your
                satisfaction is our top priority, and we are dedicated to
                exceeding your expectations with every project we undertake.
              </p>
              <div className="p-6"></div>
            </div>
          </div>

          {/* carousel container */}
          <div className="relative flex flex-col justify-center items-center w-full xl:w-[50%] forest-bg-2 h-[85vh] xl:h-[70vh]">
            <div className="absolute inset-0 opacity-60 bg-black "></div>
            {/* Display only the current testimonial */}
            <div className="relative z-10">
              <div className="flex flex-col justify-center items-center text-center xl:text-left p-6 z-10 text-white">
                <h2 className="p-6 max-w-full xl:max-w-[600px] text-center">
                  We Strive For Customer Satisfaction
                </h2>
                <p className="max-w-[600px] p-6">
                  At our painting company, our customers are at the heart of
                  everything we do. We believe in building lasting relationships
                  with our clients by providing personalized service and
                  attentive care.
                  <br />
                  <br />
                  Our team is dedicated to understanding your unique painting
                  needs and ensuring that you feel valued and supported
                  throughout the entire process. We take pride in our
                  transparent communication, timely responses, and commitment to
                  delivering high-quality results. Whether you require interior
                  painting, exterior touch-ups, or a complete home makeover, we
                  are here to bring your vision to life.
                </p>
                <div className="p-6">
                  {/* <a href="#" className="button z-10">
                  Hover me
                </a> */}
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
