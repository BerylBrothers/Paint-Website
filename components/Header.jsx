import React from 'react'
import Link from 'next/link'
import { Button } from "./ui/button"
import Nav from "../components/Nav"
import MobileNav from './MobileNav'
import Image from 'next/image'

const Header = () => {
  return (
    <header className="py-8 xl:py-6 text-black bg-white border-b border-black">
      <div className='container mx-auto flex justify-between items-center'>
        {/* Logo */}
        <a href={"/"} title="test" className="mr-10">
          <Image
            src={'/images/logo-transparent.png'}
            height={125}
            width={125}
            alt="Logo"
            className='bg-black object-contain rounded-xl'
          />
        </a>

        {/* Desktop nav & phone number */}
        <div className="hidden xl:flex justify-center gap-8 items-center w-full">
          {/* Centered Nav */}
          <Nav />
        </div>

        {/* Phone number */}
        <div className="hidden xl:flex justify-end items-center">
          <h3 className="whitespace-nowrap">9570 039 03904</h3>
        </div>

        {/* Mobile nav */}
        <div className='xl:hidden flex justify-between'>
          <MobileNav />
        </div>
      </div>
    </header>
  )
}

export default Header