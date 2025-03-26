"use client";

import React from "react";
import { useState } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import SwiperComponent from "./SwiperComponent";
import WorkSliderButtons from "./WorkSliderButtons";
import { PiCaretRightBold, PiCaretLeftBold } from "react-icons/pi";

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

const Testimonials = ({}) => {
  // const [items, setItems] = useState[0];

  const handleSlideChange = (swiper) => {
    //get current slide index
    const currentIndex = swiper.activeIndex;
    //update project state based on current slide index
    setItems(items[currentIndex]);
  };

  const swiper = useSwiper();

  return (
    <section className="pt-12">
      <div className=" mx-auto">
        <div className="flex xl:flex-row flex-col justify-between border border-black">
          {/* text container */}
          <div className="flex xl:flex-row flex-col justify-center items-center border border-black bg-blue-100 w-full xl:w-[50%] h-full">
            <div className="flex flex-col justify-center items-center text-center xl:text-left p-6 ">
              <div className="text-center xl:text-left ">
                <h5 className="p-6">Professional Land & Tree Maintenance</h5>
                <h2 className=" p-6 max-w-full xl:max-w-[400px]">
                  Tree Removal Is An Easy Task
                </h2>
                <p className="max-w-[600px] p-6">
                  Higuera's tree service is proud to serve the comunity work at
                  competitive prices.
                  <br />
                  <br />
                  Since the start of our company we have strived to obtain the
                  best quality tools so that the jobs are done to the highest
                  standards.
                </p>
                <div className="p-6">
                  <button onClick={() => swiper.slidePrev()}>
                    <PiCaretLeftBold />
                  </button>
                  <button onClick={() => swiper.slideNext()}>
                    <PiCaretRightBold />
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* image container */}
          <div className="flex flex-row  border border-black h-full w-full xl:w-[50%] ">
            <Swiper
              spaceBetween={50}
              slidesPerView={3}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
            >
              <SwiperSlide>Slide 1</SwiperSlide>
              <SwiperSlide>Slide 2</SwiperSlide>
              <SwiperSlide>Slide 3</SwiperSlide>
              <SwiperSlide>Slide 4</SwiperSlide>
              ...
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
