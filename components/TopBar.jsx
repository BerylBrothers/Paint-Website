import React from "react";
import Socials from "./Socials";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const TopBar = () => {
  return (
    <section className="bg-black text-green-500">
      <div className="flex flex-row container mx py-2 justify-between">
        <div className="flex gap-4 justify-center items-center">
          <FaEnvelope />
          <p>Service@TreeCutting.com</p>
        </div>
        <Socials />
      </div>
    </section>
  );
};

export default TopBar;
