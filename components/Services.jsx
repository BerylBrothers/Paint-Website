import React from 'react'
import {FaCode, FaPencilAlt, FaPencilRuler, FaSearch, FaMobileAlt, FaCogs } from 'react-icons/fa'
import PageTitle from './PageTitle'
import Link from 'next/link'


const services = [
    {
      icons: <FaCode />,
      title:'Web Development',
      description:
      "Specializing in building dynamic, user-friendly websites and web apps using React, Next.js, Node.js, and Tailwind CSS. Whether it's a landing page or a complex web app, I create fast, responsive, and visually appealing sites that help businesses stand out online.",
    },{
      icons:<FaPencilAlt />,
      title:'UI/UX Design',
      description:
      "Designing intuitive and visually appealing UI/UX designs that prioritize user experience. By blending functionality with aesthetics, I design seamless, user-friendly interfaces that enhance engagement and help your brand stand out online.",
    },{
      icons:<FaPencilRuler />,
      title:'Logo Design',
      description:
      "Creating memorable logos that capture your brand's essence. By focusing on simplicity and clarity, I design logos that are visually striking and timeless, helping your business make a lasting impression. A well designed logo is essential for a brands image.",
    },{
      icons:<FaSearch />,
      title:'SEO',
      description:
      "Offering SEO services that improve your website's visibility and drive organic traffic. By optimizing on-page elements, content, and technical aspects, I help your site rank higher on search engines and attract more potential customers.",
    },
    {
      icons:<FaMobileAlt />,
    title:'Website Analytics',
    description:
    "Providing website analytics and reporting services to track performance and user behavior. By analyzing key metrics, I offer insights that help optimize your site, improve user experience, and drive better results.",
      },
      {
        icons:<FaCogs />,
    title:'Digital Marketing',
    description:
    "Offering digital marketing services that boost your online presence and drive targeted traffic. From paid ads to social media strategies, I create tailored campaigns that help your business reach the right audience.",
      },
  ]

const Services = () => {

  return (
<section className="h-full text-black bg-white">
  <div className="container mx-auto h-full">
    <div className="py-10">
      <h2 className="text-center pt-6 pb-20">Crafting Beautiful, Functional Websites</h2>
      <div className="flex pt-12 justify-center items-center">
        <div className="grid md:grid-cols-3 grid-rows-2 grid-cols-1 gap-20">
          {services.map((service, index) => (
            <Link href="/services" key={index} className="relative group"> {/* Added group class here */}
              
              {/* Icon Container */}
              <div className="absolute flex justify-center items-center border h-[110px] w-[110px] border-black p-2 -top-16 left-1/2 transform -translate-x-1/2 bg-primary text-white rounded-xl transition-all duration-300 -mb-8 mx-auto z-10 group-hover:bg-blue-500 group-hover:text-white"> {/* group-hover to trigger on hover */}
                <div className="flex items-center justify-center text-4xl">
                  {service.icons}
                </div>
              </div>

              {/* Description div */}
              <div className="flex justify-center items-center border text-[14px] h-[350px] w-[350px] bg-gray-600/10 text-black p-12 rounded-xl transition-all duration-300 ease-in-out hover:bg-primary hover:text-white hover:scale-105 group-hover:bg-primary group-hover:text-white"> {/* Added group-hover here */}
                <div className="flex flex-col justify-center items-center">
                  <h3 className="m-4 pt-2 text-center">{service.title}</h3>
                  <div>{service.description}</div>
                </div>
              </div>

            </Link>
          ))}
        </div>
      </div>
    </div>
  </div>
</section>
  );
}

export default Services