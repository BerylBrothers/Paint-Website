import React from 'react'
import {FaCode, FaPencilAlt, FaPencilRuler, FaSearch, FaMobileAlt, FaCogs } from 'react-icons/fa'


const services = [
    {
      icons: <FaCode />,
      title:'Web Development',
      description:
      "I specialize in building dynamic, user-friendly websites and web apps using React, Next.js, Node.js, and Tailwind CSS. Whether it's a landing page or a complex web app, I create fast, responsive, and visually appealing sites that help businesses stand out online.",
    },{
      icons:<FaPencilAlt />,
      title:'UI/UX Design',
      description:
      "I specialize in building dynamic, user-friendly websites and web apps using React, Next.js, Node.js, and Tailwind CSS. Whether it's a landing page or a complex web app, I create fast, responsive, and visually appealing sites that help businesses stand out online.",
    },{
      icons:<FaPencilRuler />,
      title:'Logo Design',
      description:
      "I specialize in building dynamic, user-friendly websites and web apps using React, Next.js, Node.js, and Tailwind CSS. Whether it's a landing page or a complex web app, I create fast, responsive, and visually appealing sites that help businesses stand out online.",
    },{
      icons:<FaSearch />,
      title:'SEO',
      description:
      "I specialize in building dynamic, user-friendly websites and web apps using React, Next.js, Node.js, and Tailwind CSS. Whether it's a landing page or a complex web app, I create fast, responsive, and visually appealing sites that help businesses stand out online.",
    },
    {
      icons:<FaMobileAlt />,
    title:'Fully Responsive',
    description:
    "I specialize in building dynamic, user-friendly websites and web apps using React, Next.js, Node.js, and Tailwind CSS. Whether it's a landing page or a complex web app, I create fast, responsive, and visually appealing sites that help businesses stand out online.",
      },
      {
        icons:<FaCogs />,
    title:'Custom Experience',
    description:
    "I specialize in building dynamic, user-friendly websites and web apps using React, Next.js, Node.js, and Tailwind CSS. Whether it's a landing page or a complex web app, I create fast, responsive, and visually appealing sites that help businesses stand out online.",
      },
  ]

const Services = () => {

  return (
    <section className="h-full text-black bg-white">
      <div className="container mx-auto h-full">
        <div className="py-12">
          <h3 className="py-12 ">Services</h3>
          <div className="flex pt-12 justify-center items-center">
            <div className="grid md:grid-cols-3 grid-rows-2 grid-cols-1 gap-20"> {/* Increased gap */}
              {services.map((service, index) => (
                <div key={index} className="relative">
                  {/* Icon Container */}
                  <div className="absolute flex justify-center items-center border h-[110px] w-[110px] border-black p-2 -top-16 left-1/2 transform -translate-x-1/2 bg-primary text-white rounded-xl -mb-8 mx-auto z-10"> {/* Added margin bottom */}
                    <div className="flex items-center justify-center text-4xl">{service.icons}</div>
                  </div>
  
                  {/* Description div */}
                  <div className="flex justify-center items-center border text-[14px] h-[350px] w-[350px] bg-gray-600/10 text-black p-12 rounded-xl transition-shadow duration-300 hover:shadow-lg">
                    <div className="flex flex-col justify-center items-center">
                      <h3 className="m-4 pt-2 text-center">{service.title}</h3>
                      <div>{service.description}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services