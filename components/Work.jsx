'use client'

import React from 'react'
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
    FaHtml5,
    FaCss3, FaJs, FaReact, FaFigma, FaNodeJs
  } from "react-icons/fa";
  
  import {
    SiTailwindcss, SiNextdotjs
    } from "react-icons/si";
    
    import Image from 'next/image';

const projects = [
  {
    title: 'Aqua Solutions',
    description: "The Aqua Solutions website is designed with a clean, modern, and user-friendly interface that reflects the professionalism and reliability of the plumbing company. The website offers a seamless experience for users who are looking for high-quality plumbing services, whether for residential or commercial needs",
    href:"/aqua",
    stack:[
      {
        name:< FaFigma />
      },
      {
        name:< SiNextdotjs />
      },
      {
        name:<  SiTailwindcss />
      },
    ],
      image: '/assets/work/Thumbnail2.png',
  },
  {
    title: 'Bowl & Soul',
    description: "The Bowl & Soul website features a clean, elegant design that reflects the restaurant's authentic Asian flavors and inviting atmosphere. The interactive menu showcases a variety of dishes with high-quality images and detailed descriptions, while the About Us section shares the restaurant's story and dedication to quality.",
    href:"/lotus",
    stack:[
      {
        name:< FaFigma />
      },
      {
        name:< SiNextdotjs />
      },
      {
        name:< FaJs />
      },
    ],
      image: '/assets/work/Thumbnail1.png',
  },
  {
    title: 'Pulse Fitness',
    description: "I created a sleek and user-friendly website for Pulse Fitness that showcases the gym's offerings in a modern and engaging way. The design emphasizes simplicity and ease of navigation, highlighting key features like membership options, class schedules, and contact information blah blah blah blah.",
    href:"/pulse",
    stack:[
      {
        name:< SiNextdotjs />
      },
      {
        name:<  SiTailwindcss />
      },
      {
        name:< FaHtml5 />
      },
    ],
      image: '/assets/work/Thumbnail3.png',
  }
]

const Work = () => {
    return (
        <section className='h-full bg-white text-black'>
          <div className="container mx-auto h-full">
           
            <div className='py-12'>
              <h2 className='pt-6 pb-20 text-center'>Recent Projects</h2>
              <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                {projects.map((project, index) => {
                  return (
                    <motion.div
                    // initial={{ opacity: 0, x: -200 }}  // Start from the left and invisible
                    // whileInView={{ opacity: 1, x: 0 }}  // Animate to full opacity and original position
                    // viewport={{ once: true }}  // Trigger animation once when in view
                    // transition={{ duration: 0., delay: index * 0.2 }} // Staggered animation delay
                    className='border border-black flex flex-col rounded-xl' key={index}>
                      <Link href={project.href}>
                          <div className='relative h-80 opacity-100 transition-opacity rounded-xl duration-300 ease-in-out hover:opacity-70 '>
                            <Image
                              src={project.image}
                              alt={project.title}
                              className='rounded-t-xl'
                              fill  // This makes the image take up the full container
                              
                            />
                          </div>
                      </Link>
                      <div className="p-2 pt-4 flex flex-row">
                       
                        {project.stack.map((tech, idx) => (
                          <span key={idx} className="mr-2 text-xl">{tech.name}</span>
                        ))}
                      </div>
                      <div className='p-2'><h3>{project.title}</h3></div>
                      <div className='p-2'>{project.description}</div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      )
}

export default Work