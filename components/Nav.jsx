"use client"

import Link from "next/link";
import {usePathname} from "next/navigation";

import React from 'react'

const links = [
    {
        name:"home",
        path:"/",
    } ,
    {
        name:"services",
        path:"/services",
    },
    {
        name:"resume",
        path:"/resume",
    },
    {
        name:"projects",
        path:"/work",
    },
    {
        name:"contact",
        path:"/contact",
    },
]
    


const Nav = () => {
    const pathname = usePathname();
    console.log(pathname);
  return (
    <nav className="flex gap-8">
        {links.map((link, index)=>{
            return <Link href={link.path} key={index} 
            className={`${link.path === pathname && "text-blue-300 border-b-2 border-blue-300"} capitalize font-medium hover:text-blue-300 transition-all`}>
                {link.name}</Link>
        })}
    </nav>
  )
}

export default Nav