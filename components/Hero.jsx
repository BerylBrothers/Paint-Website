"use client"

import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const image = new Image();
    image.src = '/images/tree-hero-resize.jpg';
    image.onload = () => setImageLoaded(true);
  }, []);

  return (
    <>
      {/* Preload the background image */}
      <link
        rel="preload"
        href="/images/tree-hero-resize.jpg"
        as="image"
        type="image/jpeg"
        crossOrigin="anonymous"
      />

      <section
        className={`relative w-full h-screen bg-transparent bg-cover bg-center transition-opacity duration-1000 ${
          imageLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          backgroundImage: imageLoaded ? 'url("/images/tree-hero-resize.jpg")' : '',
        }}
      >
        {/* Dark overlay 2*/}
        <div className="absolute inset-0 bg-black opacity-50"></div>
        {/* Dark overlay 2*/}
        <div className="absolute inset-0 bg-black opacity-60 w-[40%]"></div>

        {/* Content on top of the image */}
        <div className="container mx-auto relative z-10 text-white flex items-center justify-center h-full">
        <div className='flex flex-col xl:justify-start justify-center'> 
          
          <p className=" flex xl:justify-start justify-center mt-4 text-xl py-2">Reliable, Safe, and Efficient Tree Removal</p>
         
          <h1 className="flex xl:justify-start justify-center text-center xl:text-left text-4xl font-bold xl:text-8xl xl:max-w-[800px]">Professional Tree Cutting Services</h1>
          
          
          <div className='flex xl:justify-start justify-center'>   
            <button className="button py-2">Get a Quote</button>
            </div>
       
          </div>  
       
       
         
        </div>
      </section>
    </>
  );
};

export default Hero;