'use client'
import React from 'react'
import {motion} from 'framer-motion'
import PageTitle from '@/components/PageTitle'
import Image from 'next/image'

const Pulse = () => {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
            }}
            className=" flex flex-col items-center justify-center xl:px-0 pt-12 overflow-hidden"
        >
            <div className=" flex justify-center items-center w-full">
                <div className="flex flex-col justify-center items-center w-full text-center">
                    <div className='flex flex-col justify-center items-center pb-16'>
                        {/* Title */}
                        <PageTitle title="Pulse Fitness Design" className="mb-2 text-black" />
                        {/* Paragraph with max-width */}
                        <p className="max-w-[600px] text-left mb-6">
                            The Lotus Garden website features a clean, elegant design that reflects the restaurant's authentic Asian flavors and inviting atmosphere. The interactive menu showcases a variety of dishes with high-quality images and detailed descriptions, while the About Us section shares the restaurant's story and dedication to quality.
                        </p>
                    </div>
                    

                    <div className=' w-full flex flex-col justify-center items-center bg-white text-black py-12'>
                        {/* Title */}
                        <div className="pb-12 flex justify-center items-center">
                        <h2 className=" text-black text-center">UI/UX</h2>
                         </div>
                       
                   

                    {/* First Image */}
                    <div className="flex flex-col justify-center items-center pt-6 pb-12">
                        <Image
                            src="/assets/work/PulseFitnessShowcase.png"
                            alt="Lotus Garden Showcase"
                            height={1200}
                            width={1200}
                            className="rounded-xl border-4 border-primary"
                        />
                    </div>

                    <div className='flex justify-between py-6'>
                        <div className='flex flex-col'>
                    <h3 className=" text-black text-center mb-4">Results</h3>
                        
                        {/* Paragraph with max-width */}
                        <p className="max-w-[600px] text-left mb-6">
                            The Lotus Garden website features a clean, elegant design that reflects the restaurant's authentic Asian flavors and inviting atmosphere. The interactive menu showcases a variety of dishes with high-quality images and detailed descriptions, while the About Us section shares the restaurant's story and dedication to quality.
                        </p>
                        
                        </div>
                   
                    {/* Second Image with scroll effect */}
                    <div
                            className="flex flex-col justify-center items-center w-full max-w-[600px] relative border-4 border-black rounded-xl overflow-hidden">
                                <div></div>
                            <div className="w-full h-[600px] relative overflow-hidden group">
                                <Image
                                    src="/assets/work/pulse.png"
                                    alt="Lotus Garden Showcase"
                                    height={1200}
                                    width={1200}
                                    className="w-full h-auto object-cover transition-transform duration-1000 ease-in-out group-hover:translate-y-[-64.7%] xl:group-hover:translate-y-[-76.5%]"
                                />
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.section>
    );
}

export default Pulse

