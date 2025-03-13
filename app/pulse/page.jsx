'use client'
import React from 'react'
import {motion} from 'framer-motion'
import PageTitle from '@/components/PageTitle'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

const Pulse = () => {
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
                        <PageTitle title="Pulse Fitness Design" className="mb-2 text-black" />
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
                                src="/assets/work/PulseFitnessShowcase.png"
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
                                        The design process for Pulse Fitness started with understanding the gym’s goal of attracting new members. We researched industry trends and competitors to ensure a modern and engaging design.

Wireframes were created to prioritize key sections like class schedules, membership options, and contact details. The design featured an easy-to-use booking system and clear calls to action.

With a mobile-first approach, we ensured the site was responsive on all devices. Bold branding and dynamic imagery highlighted the gym’s energy and community, ultimately aiming to drive membership growth.
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
                                        src="/assets/work/Pulse.png"
                                        alt="Lotus Garden Showcase"
                                        height={1200}
                                        width={1200}
                                        className="w-full h-auto object-cover transition-transform duration-1000 ease-in-out group-hover:translate-y-[-62.5%] xl:group-hover:translate-y-[-76.5%]"
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
                                The Pulse Fitness website successfully attracted more visitors and led to a significant increase in membership sign-ups. The streamlined layout and intuitive booking system made it easy for users to view class schedules and join the gym. The mobile-first design ensured a smooth experience across all devices, increasing engagement from mobile users. Dynamic imagery and bold branding helped communicate the gym's energetic atmosphere, resulting in higher interaction rates and stronger connections with potential members. Overall, the website played a key role in boosting both online and in-person engagement for Pulse Fitness.
                                </p>
                            </div>
                        </div>
                    </div>      
                    </div>
                    
                    <div className="w-full flex flex-col justify-center items-center bg-white pb-6 xl:pb-12">
                    <a href="/contact">
                        <Button variant="outline" size="lg"
                            className="uppercase flex items-center gap-2 border-black text-black">
                            <span>Get In Touch</span>
                        </Button>
                        </a>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Pulse

// className="w-full h-auto object-cover transition-transform duration-1000 ease-in-out group-hover:translate-y-[-62.5%] xl:group-hover:translate-y-[-76.5%]"