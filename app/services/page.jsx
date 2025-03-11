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
    "We specialize in building dynamic, user-friendly websites and web applications using React, Next.js, Node.js, and Tailwind CSS. Whether you need a sleek landing page or a complex web app, I focus on creating fast, responsive, and visually engaging sites. I prioritize seamless user experiences by crafting intuitive interfaces and optimized performance across all devices. My approach ensures that each project is tailored to your specific business needs, helping you establish a strong online presence that stands out, engages users, and drives results.",
    href:""
  },{
    num:'02',
    title:'UI/UX Design',
    description:
    "We know how important crafting intuitive and visually engaging UI/UX designs that prioritize both user experience and aesthetics are. By understanding your brand and audience, I design seamless interfaces that are easy to navigate and enhance user satisfaction. From wireframes to fully interactive prototypes, I focus on creating designs that not only look great but also provide a smooth, efficient user journey. My goal is to help your business build meaningful connections with users, ensuring your website or app is both functional and visually compelling.",
    href:""
  },{
    num:'03',
    title:'Logo Design',
    description:
    "I specialize in creating unique, memorable logos that capture the core essence of your brand. By focusing on simplicity, clarity, and versatility, I design logos that are visually striking and easily recognizable across all platforms. I work closely with you to understand your brand's values, vision, and target audience, ensuring the logo aligns with your overall branding strategy. Whether for digital or print, my designs are timeless, adaptable, and leave a lasting impression, helping your business establish a strong, cohesive visual identity that resonates with customers.",
    href:""
  },{
    num:'04',
    title:'SEO',
    description:
    "I specialize in SEO services designed to boost your website’s visibility and drive organic traffic. By conducting thorough keyword research, optimizing on-page elements, and improving technical aspects like site speed and mobile performance, I help improve your search engine rankings. My approach is data-driven, focusing on both short-term gains and long-term growth. I work to ensure that your site attracts the right audience, increases user engagement, and ultimately generates more leads and conversions. With continuous monitoring and optimization.",
    href:""
  },
  {
    num:'05',
    title:'Website Analytics',
    description:
    "I specialize in website analytics and reporting services that provide valuable insights into your site’s performance and user behavior. By tracking key metrics such as traffic, conversions, and user interactions, I help you understand how visitors engage with your website. I offer detailed reports that highlight areas for improvement, optimize user experience, and increase overall effectiveness. With data-driven recommendations, I ensure your website continues to grow, driving more targeted traffic and achieving measurable business goals. Regular analysis and optimization keep your site performing at its best.",
    href:""
  },
  {
    num:'06',
    title:'Digital Marketing',
    description:
    "I specialize in digital marketing services that help your business grow its online presence and reach the right audience. By leveraging strategies such as paid advertising, social media campaigns, content marketing, and email outreach, I drive targeted traffic and improve engagement. I tailor each campaign to your unique business goals, ensuring that your marketing efforts are focused and effective. With continuous monitoring and optimization, I help you achieve measurable results, increase brand awareness, and convert leads into loyal customers.By utilizing data-driven insights and the latest marketing trends, our digital marketing campaigns are always optimized.",
    href:""
  },
]



const Services = () => {
  return (
    <section className=' flex flex-col justify-center py-6 xl:py-0'>
     <div // initial={{opacity: 0}} animate={{opacity: 1, transition:{delay: 2.4, duration:0.4, ease:"easeIn"},}} 
     className=" py-12">
     <div className='border-b border-white w-full'>
     <PageTitle title="Services" />
     </div>
      <div className='container grid grid-cols-1 md:grid-cols-2 gap-[60px] p-4'>
        {services.map((service, index) =>{
          return <div key={index} className='flex-1 flex-col justify-center gap-6 group'>
            <div className='w-full flex justify-between items-center'>
            <div className='text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500'>{service.num}</div>
            <Link href={service.href} className='w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45'>
            <BsArrowDownRight className='text-primary text-3xl' />
            </Link>
            </div>
            <h2 className='leading-none py-2 group-hover:text-accent transition-all duration-500'>{service.title}</h2>
             <p>{service.description}</p>
           
            <div className='border-b border-white w-full'></div>
          </div>
        })}
      </div>
     </div>
      </section>
  )
}

export default Services