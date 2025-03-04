import React from 'react';
import Link from 'next/link';
import {FaGithub, FaLinkedin, FaYoutube, FaFacebook} from 'react-icons/fa'

const icons = [
    {icon:<FaGithub />, path: 'https://github.com/BerylBrothers'},
    {icon:<FaLinkedin />, path: 'https://www.linkedin.com/in/daniel-collins-web-design/'},
    {icon:<FaFacebook />, path: 'https://www.facebook.com/profile.php?id=61558742784719'},
]

const Socials = ({containerStyles, IconStyles}) => {
  return (
    <div className={containerStyles}>
        {icons.map((item, index) => {
           return <Link href={item.path} key={index} className={IconStyles}><a title="Socials">{item.icon}</a></Link>
        })}
    </div>
  )
}

export default Socials