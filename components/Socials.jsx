import React from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaYoutube, FaFacebook } from "react-icons/fa";

const icons = [
  {
    icon: <FaGithub />,
    path: "",
    hoverColor: "hover:bg-[#6e5494]",
  },
  {
    icon: <FaLinkedin />,
    path: "",
    hoverColor: "hover:bg-[#0077B5]",
  },
  {
    icon: <FaFacebook />,
    hoverColor: "hover:bg-[#1877F2]",
    path: "",
  },
];

const Socials = ({}) => {
  return (
    <div className="flex gap-3">
      {icons.map((item, index) => {
        return (
          <a
            href={item.path}
            key={index}
            title="test"
            className={`w-6 h-6 flex flex-row justify-center items-center text-green-500 text-base`}
          >
            {item.icon}
          </a>
        );
      })}
    </div>
  );
};

export default Socials;
