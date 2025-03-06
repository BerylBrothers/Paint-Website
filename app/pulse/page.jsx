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
            className="min-h-screen flex flex-col items-center justify-center xl:px-0 py-12"
        >
            <div className="container mx-auto flex justify-center items-center w-full">
                <div className="flex flex-col justify-center items-center w-full text-center">
                    <div className='flex flex-col justify-center items-center '>
                    {/* Title */}
                    <PageTitle title="Pulse Fitness Design" className="mb-2" />
                    {/* Paragraph with max-width */}
                    <p className="max-w-[600px] text-left mb-6">
                    I created a sleek and user-friendly website for Pulse Fitness 
                    that showcases the gym's offerings in a modern and engaging way. The design emphasizes 
                    simplicity and ease of navigation, highlighting key features like membership options, class schedules, and contact information. With a focus on clean visuals and clear calls to action, the website provides an inviting experience.
                    </p>
                    </div>
                    {/* Image */}
                    <div className="flex flex-col justify-center items-center pt-6">
                        <Image 
                            src="/assets/work/PulseFitnessShowcase.png"
                            alt="Lotus Garden Showcase"
                            height={1200}
                            width={1200}
                            className="border-4 border-white"
                        />
                    </div>
                </div>
            </div>
        </motion.section>
    );
}

export default Pulse

