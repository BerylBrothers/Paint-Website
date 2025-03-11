import React from 'react';
import Image from 'next/image';
import {Button} from "../components/ui/button";
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className='hero-bg py-6'>
        <div className='container mx-auto'>
          <div className='flex flex-col xl:flex-row items-center justify-between py-6'>
            <div className='text-center xl:text-left bg-primary rounded-xl p-4'>
              <h2 className='mb-6'>About Me</h2>
              <p className='max-w-[500px]'>I'm a passionate Web Developer and Designer dedicated to crafting seamless digital experiences. With a blend of technical expertise and a strong sense of design, I specialize in building websites that are not only visually stunning but also user-friendly, fast, and responsive.
                                          I believe that a great website does more than just look good—it should tell 
                                          your brand’s story, engage visitors, and turn them into loyal customers. 
              </p>
            </div>
            <div className='order-1 xl:order-none mt-8 xl:mt-0 mb-4 xl:mb-0 rounded-full border-white'>
              <div className='relative w-[298px] h-[298px] xl:w-[400px] xl:h-[400px] rounded-full overflow-hidden border-4 border-white'>
                <Image 
                src={"/assets/About-Me.png" } 
                priority
            quality={100}
            fill
            alt="Image"
            className="object-cover"
                />
              </div>
             
              </div>
       
          </div>
          <div className=" flex justify-center">
          <Button variant="outline" size="lg" className="uppercase flex justify-center items-center border-white text-white">
            <span>Get In Touch</span>
          </Button>
        </div>
          </div>
        </section>
  )
}

export default About