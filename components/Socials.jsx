import React from 'react';
import Link from 'next/link';
import {FaGithub, FaLinkedin, FaYoutube, FaFacebook} from 'react-icons/fa'

const icons = [
    {icon:<FaGithub />, path: 'https://github.com/BerylBrothers', hoverColor:"hover:bg-[#6e5494]"},
    {icon:<FaLinkedin />, path: 'https://www.linkedin.com/in/daniel-collins-web-design/', hoverColor:"hover:bg-[#0077B5]"},
    {icon:<FaFacebook />, path: 'https://www.facebook.com/profile.php?id=61558742784719', hoverColor:"hover:bg-[#1877F2]"},
]

const Socials = ({containerStyles, }) => {
  return (
    <div className={containerStyles}>
        {icons.map((item, index) => {
           return <a href={item.path} key={index} title="test" className={`w-9 h-9 border border-white rounded-full flex justify-center items-center text-white text-base hover:text-white transition-all ${item.hoverColor}`}>{item.icon}</a>
        })}
    </div>
  )
}

export default Socials