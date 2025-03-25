import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

const SwiperComponent = ({ image, name, message }) => {
  return (
    <div className="bg-blue-700 text-white">
      <Image src={image} height={300} width={300} alt="" />
      <h3>{name}</h3>
      <p>{message}</p>
    </div>
  );
};

export default SwiperComponent;
