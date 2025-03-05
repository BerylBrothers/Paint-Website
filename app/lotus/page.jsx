'use client'
import React from 'react'
import {motion} from 'framer-motion'
import PageTitle from '@/components/PageTitle'
import Image from 'next/image'

const Lotus = () => {
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
                    <PageTitle title="The Lotus Garden Design" className="mb-2" />
                    {/* Paragraph with max-width */}
                    <p className="max-w-[600px] text-left mb-6">
                        The Lotus Garden website features a clean, elegant design that reflects the restaurant's authentic Asian flavors and inviting atmosphere. The interactive menu showcases a variety of dishes with high-quality images and detailed descriptions, while the About Us section shares the restaurant's story and dedication to quality.
                    </p>
                    </div>
                    {/* Image */}
                    <div className="flex flex-col justify-center items-center pt-6">
                        <Image 
                            src="/assets/work/LotusGardenShowcase.png"
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
};

export default Lotus;