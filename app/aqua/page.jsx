'use client'

import React from 'react'
import {motion} from 'framer-motion'
import PageTitle from '@/components/PageTitle'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import {PiCaretRightBold, PiCaretLeftBold} from 'react-icons/pi'


const Aqua = () => {
    return (
        <section
            // initial={{ opacity: 0 }}
            // animate={{
            //     opacity: 1,
            //     transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
            // }}
            className="flex flex-col items-center justify-center xl:px-0 pt-12 overflow-hidden"
        >
            <div className="flex justify-center items-center w-full">
                <div className="flex flex-col justify-center items-center w-full text-center">
                    <div className="flex flex-col justify-center items-center ">
                        {/* Title */}
                        <PageTitle title="Aqua Solutions Design" className="mb-2 text-black" />
                        {/* Paragraph with max-width */}
                    </div>

                    <div className="w-full flex flex-col justify-center items-center px-4 xl:px-0 bg-white text-black py-6 xl:py-12">
                        {/* Title */}
                        <div className="pb-2 xl:pb-12 flex justify-center items-center">
                            <h2 className="text-black text-center">UI/UX</h2>
                        </div>

                        {/* First Image */}
                        <div className="flex flex-col justify-center items-center pt-6 xl:pb-16">
                            <Image
                                src="/assets/work/AquaShowcase.png"
                                alt="Lotus Garden Showcase"
                                height={1200}
                                width={1200}
                                className="rounded-xl border-4 border-primary"
                            />
                        </div>

                        <div className="flex flex-col xl:flex-row xl:justify-between py-6 xl:gap-10">
                            <div className="flex flex-col xl:pr-4 justify-center items-center py-6 xl:py-12">
                                <div className="flex flex-col justify-center items-center border-2 border-black rounded-xl p-4">
                                    <div>
                                    <h3 className="text-black text-center xl:text-left mb-4">Design Process</h3>
                                    {/* Paragraph with max-width */}
                                    <div className="xl:max-w-[500px]">
                                        <p className="text-left mb-6">
                                            The design process for the Aqua Solutions Plumbing website began with understanding the client’s goals and conducting research to analyze competitors and industry trends. We focused on improving online visibility, showcasing services, and providing an easy way for customers to get in touch.
                                            Next, we created wireframes and planned the site layout, prioritizing essential sections like services, contact, and an intuitive booking system. The design integrated Aqua Solutions’ branding with a mobile-first approach to ensure accessibility across all devices. We used high-quality images of the team to build trust and highlight their expertise.
                                        </p>
                                    </div>
                                    </div>
                                </div>
                            </div>

                            {/* Second Image with scroll effect */}
                            <div className='pt-6 xl:pt-0'>
                            <div className="flex flex-col justify-center items-center w-full max-w-[600px] relative border-4 border-black rounded-xl overflow-hidden ">
                                <div className="w-full h-[600px] relative overflow-hidden group">
                                    <Image
                                        src="/assets/work/Aqua.png"
                                        alt="Lotus Garden Showcase"
                                        height={1200}
                                        width={1200}
                                        className="w-full h-auto object-cover transition-transform duration-1000 ease-in-out group-hover:translate-y-[-64.4%] xl:group-hover:translate-y-[-77.5%]"
                                    />
                                </div>
                            </div>
                            </div>
                        </div>

                        <div>
                            {/* <Button variant="outline" size="lg" 
                            className="uppercase flex items-center gap-2 border-black text-black">
                            <span>Get In Touch</span>
                            </Button> */}
                        </div>
                        <div className="flex flex-col pt-6 bg-white w-full">
                        <div className="flex flex-col justify-center items-center">
                            <div className='bg-gray-200 text-black p-4 rounded-xl'>
                                <h3 className="text-black text-center xl:text-left mb-4">Results</h3>
                                {/* Paragraph with max-width */}
                                <p className="max-w-[600px] text-left mb-6">
                                The Aqua Solutions Plumbing website successfully increased online visibility, driving more organic traffic through improved SEO and a user-friendly design. The streamlined layout and intuitive navigation led to a higher conversion rate, with more customers booking services directly through the integrated booking system. The mobile-first design ensured that users across all devices had a seamless experience, contributing to higher engagement and longer time spent on the site. Overall, the website enhanced the company's online presence, built trust with potential clients through professional imagery, and significantly improved customer interaction with the brand.
                                </p>
                            </div>
                        </div>
                    </div>      
                    </div>
                    
                    <div className="w-full flex flex-row justify-center items-center bg-white pb-6 xl:pb-12">
                    <div className="flex flex-row justify-between items-center w-full max-w-4xl">
                    {/* Left Arrow */}
                    <div className="flex justify-start flex-grow">
                    <a href="/pulse">
                    <button className="bg-black border-black p-4 rounded-xl">
                     <PiCaretLeftBold className="text-white" />
                    </button>
                    </a>
                    </div>

    {/* Get In Touch Button */}
    <a href="/contact">
      <Button variant="outline" size="lg" className="uppercase flex items-center gap-2 border-black text-black">
        <span>Get In Touch</span>
      </Button>
    </a>

    {/* Right Arrow */}
    <div className="flex justify-end flex-grow">
        <a href="/lotus">
      <button className="bg-black border-black p-4 rounded-xl">
        <PiCaretRightBold className="text-white" />
      </button>
      </a>
    </div>
  </div>
</div>

                </div>
            </div>
        </section>
    );
}

export default Aqua

