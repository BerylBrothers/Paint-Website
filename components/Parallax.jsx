'use client'

import { useState, useEffect } from 'react';

const items = [
  {
      image:"",
      action:"1 Request Us",
      description:"You can depend on our trained employees to provide service."
  } ,
  {
    image:"",
    action:"2 Cutting Trees",
    description:"You can depend on our trained employees to provide service."
  },
  {
    image:"",
    action:"3 Service Done",
    description:"You can depend on our trained employees to provide service."
  },
]

const Parallax = () => {
  const [scrollY, setScrollY] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const image = new Image();
    image.src = '/images/logs.jpg'; // Replace with your image path
    image.onload = () => setImageLoaded(true);
  }, []);

  const parallaxStyle = {
    backgroundPosition: `center ${scrollY * 0.01}px`, // Adjust this value for the effect
    backgroundSize: 'cover',  // Ensure the background covers the whole area
    backgroundAttachment: 'fixed',  // Keep background fixed during scroll for parallax effect
    opacity: imageLoaded ? 1 : 0, // Set opacity to 1 when image is loaded, 0 otherwise
    transition: 'opacity 1s ease-out', // Smooth transition for opacity change
  };

  return (
    <div
      className="relative w-full h-[60vh] xl:h-[50vh] bg-cover bg-bottom bg-no-repeat flex items-center py-12 justify-center"
      style={{
        ...parallaxStyle,
        backgroundImage: imageLoaded ? 'url("/images/logs.jpg")' : '', // Use background image when loaded
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <section className=''>
        <div className="container mx-auto text-center px-4">
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            {items.map((item, index) => {
              return (
                <div className='flex flex-col text-white z-10 group' key={index}>
                      <div className="mb-4 opacity-60 transition-all duration-300 hover:opacity-100">
                    <h3 className="mb-2">{item.action}</h3>
                    <div className="border-t-2 border-white py-4 mt-4 transition-all duration-300 group-hover:border-green-800">
                      <p className="text-sm md:text-lg">{item.description}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Parallax;