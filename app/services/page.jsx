"use client";

import {BsArrowDownRight} from 'react-icons/bs'
import Link from 'next/link'
import {motion} from 'framer-motion'
import PageTitle from '@/components/PageTitle';

import React from 'react'


const services = [
  {
    num:'01',
    title:'Web Development',
    description:
    "We specialize in creating dynamic, user-friendly websites and web applications using React, Next.js, Node.js, and Tailwind CSS. From sleek landing pages to complex web apps, the focus is on delivering fast, responsive, and visually engaging sites. With an emphasis on seamless user experiences, we craft intuitive interfaces and ensure optimized performance across all devices. Every project is tailored to meet specific business needs, helping clients establish a strong online presence that stands out, engages users, and drives results.",
    href:""
  },{
    num:'02',
    title:'UI/UX Design',
    description:
    "We understand the importance of crafting intuitive and visually engaging UI/UX designs that prioritize both user experience and aesthetics. By gaining a deep understanding of your brand and audience, seamless interfaces are designed to be easy to navigate and enhance user satisfaction. From wireframes to fully interactive prototypes, the focus is on creating designs that not only look great but also provide a smooth, efficient user journey. The goal is to help businesses build meaningful connections with users.",
    href:""
  },{
    num:'03',
    title:'Logo Design',
    description:
    "Creating unique and memorable logos that capture the core essence of a brand, focusing on simplicity, clarity, and versatility. The goal is to design logos that are visually striking and easily recognizable across all platforms. By working closely with clients to understand their brand’s values, vision, and target audience, each logo aligns with the overall branding strategy. Whether for digital or print, the designs are timeless, adaptable, and leave a lasting impression, helping businesses establish a strong, cohesive visual identity that resonates with customers.",
    href:""
  },{
    num:'04',
    title:'SEO',
    description:
    "SEO services are offered to boost website visibility and drive organic traffic. Through thorough keyword research, on-page optimization, and improvements to technical aspects like site speed and mobile performance, search engine rankings are enhanced. The approach is data-driven, focusing on both short-term gains and long-term growth. The goal is to attract the right audience, increase user engagement, and generate more leads and conversions. Continuous monitoring and optimization ensure sustained results.",
    href:""
  },
  {
    num:'05',
    title:'Website Analytics',
    description:
    "Website analytics and reporting services are provided to offer valuable insights into site performance and user behavior. By tracking key metrics like traffic, conversions, and user interactions, a clearer understanding is gained of how visitors engage with the website. Detailed reports highlight areas for improvement, optimize user experience, and enhance overall effectiveness. With data-driven recommendations, the goal is to drive targeted traffic and achieve measurable business goals. Regular analysis and optimization ensure the website continues to perform at its best.",
    href:""
  },
  {
    num:'06',
    title:'Digital Marketing',
    description:
    "Digital marketing services are provided to help businesses grow their online presence and reach the right audience. By leveraging strategies like paid advertising, content marketing, and email outreach, targeted traffic is driven, and engagement is improved. Each campaign is tailored to the unique business goals, ensuring focused and effective marketing efforts. Continuous monitoring and optimization lead to measurable results and the conversion of leads into loyal customers. Utilizing data-driven insights this ensures that digital marketing campaigns are always optimized.",
    href:""
  },
]



const Services = () => {
  return (
    <section className=' flex flex-col justify-center'>
     <div // initial={{opacity: 0}} animate={{opacity: 1, transition:{delay: 2.4, duration:0.4, ease:"easeIn"},}} 
     className="pt-12 ">
     <div className='border-b border-white w-full'>
     <PageTitle title="Services" />
     </div>
     <div className=' bg-white text-black pb-12'>
      <div className=' container grid grid-cols-1 md:grid-cols-2 gap-[60px] p-4 '>
        {services.map((service, index) =>{
          return <div key={index} className='flex-1 flex-col justify-center gap-6 group'>
            <div className='w-full flex justify-between items-center'>
            <div className='text-5xl font-extrabold text-outline text-black group-hover: transition-all duration-500'>{service.num}</div>
            <div className='w-[70px] h-[70px] rounded-full bg-black group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45'>
            <BsArrowDownRight className='text-white group-hover:text-white text-3xl transition-all duration-500' />
            </div>
            </div>
            <h2 className='leading-none py-2 group-hover: transition-all duration-500'>{service.title}</h2>
             <p>{service.description}</p>
           
            {/* <div className='border-b border-white w-full'></div> */}
          </div>
        })}
      </div>
      </div>
     </div>
      </section>
  )
}

export default Services