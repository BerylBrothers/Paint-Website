import React from 'react'
import Link from 'next/link';
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
    href:"/",
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
      image: '/assets/work/Web-Screen-1.png',
  },
  {
    title: 'The Lotus Garden',
    description: "The Lotus Garden website features a clean, elegant design that reflects the restaurant's authentic Asian flavors and inviting atmosphere. The interactive menu showcases a variety of dishes with high-quality images and detailed descriptions, while the About Us section shares the restaurant's story and dedication to quality.",
    href:"/",
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
      image: '/assets/work/Web-Screen-2.png',
  },
  {
    title: 'Pulse Fitness',
    description: "I created a sleek and user-friendly website for Pulse Fitness that showcases the gym's offerings in a modern and engaging way. The design emphasizes simplicity and ease of navigation, highlighting key features like membership options, class schedules, and contact information blah blah blah blah.",
    href:"/",
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
      image: '/assets/work/Web-Screen-3.png',
  }
]

const Work = () => {
    return (
        <section className='h-full bg-white text-black'>
          <div className="container mx-auto h-full">
            <div className='py-12'>
              <h3 className='py-12'>My Work</h3>
              <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                {projects.map((project, index) => {
                  return (
                    <div className='border border-black flex flex-col rounded-xl' key={index}>
                      <Link href={project.href}>
                          <div className='relative h-80 opacity-100 transition-opacity rounded-xl duration-300 ease-in-out hover:opacity-70 '>
                            <Image
                              src={project.image}
                              alt={project.title}
                              className='rounded-t-xl'
                              layout="fill"  // This makes the image take up the full container
                              objectFit="cover" // Ensures the image covers the div without distortion
                            />
                          </div>
                      </Link>
                      <div className="p-2 pt-4 flex flex-row">
                        {/* Map over the stack array to render each icon */}
                        {project.stack.map((tech, idx) => (
                          <span key={idx} className="mr-2 text-xl">{tech.name}</span>
                        ))}
                      </div>
                      <div className='p-2'>{project.description}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      )
}

export default Work