'use client'

import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion'; // assuming you're using framer-motion for animations
import Image from 'next/image'; // assuming you're using Next.js' Image component
import PageTitle from '@/components/PageTitle';
import { Button } from '@/components/ui/button';
import {PiCaretRightBold, PiCaretLeftBold} from 'react-icons/pi'

const LotusGarden = () => {
    
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
                        <PageTitle title="Bowl & Soul Design" className="mb-2 text-black" />
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
                                src="/assets/work/LotusGardenShowcase.png"
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
                                        The design process for Bowl & Soul’s website began by understanding the brand and its target audience. We focused on showcasing the restaurant’s authentic recipes and cozy atmosphere while analyzing competitors and industry trends.

We then created wireframes and mapped out the layout, prioritizing key sections like the menu, online ordering, and contact details. High-quality images of the dishes were integrated to entice visitors, while clear calls to action for reservations and ordering were placed throughout.

A mobile-first approach ensured a seamless experience across all devices, and the design incorporated Bowl & Soul’s warm branding, blending tradition with modern style. The result was a user-friendly, visually engaging website that reflects the restaurant’s unique dining experience.
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
                                        src="/assets/work/Lotus.png"
                                        alt="Lotus Garden Showcase"
                                        height={1200}
                                        width={1200}
                                        className="w-full h-auto object-cover transition-transform duration-1000 ease-in-out group-hover:translate-y-[-47.5%] xl:group-hover:translate-y-[-67%]"
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
                                The Bowl & Soul website successfully enhanced the restaurant’s online presence, leading to increased traffic and higher engagement. The easy-to-navigate layout and clear calls to action boosted online orders and reservations. High-quality images of the food captured the essence of the restaurant, enticing visitors to explore the menu further. The mobile-first design ensured a smooth experience across all devices, resulting in increased user interaction. Overall, the website helped strengthen the restaurant’s brand identity and drove more customers through both digital engagement and in-person visits.
                                </p>
                            </div>
                        </div>
                    </div>      
                    </div>
                    
                    
                                       <div className="w-full flex flex-row justify-center items-center bg-white pb-6 xl:pb-12">
                                       <div className="flex flex-row justify-between items-center w-full max-w-4xl">
                                       {/* Left Arrow */}
                                       <div className="flex justify-start flex-grow">
                                       <a href="/aqua">
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
                           <a href="/pulse">
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
};

export default LotusGarden;






// className="w-full h-auto object-cover transition-transform duration-1000 ease-in-out group-hover:translate-y-[-47.5%] xl:group-hover:translate-y-[-67%]"