'use client'

import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion'; // assuming you're using framer-motion for animations
import Image from 'next/image'; // assuming you're using Next.js' Image component
import PageTitle from '@/components/PageTitle';

const LotusGarden = () => {
    const [isHovered, setIsHovered] = useState(false);
    const imageRef = useRef(null);

    useEffect(() => {
        let scrollInterval;

        if (isHovered) {
            // Start scrolling the image when hovered
            scrollInterval = setInterval(() => {
                if (imageRef.current) {
                    imageRef.current.scrollBy(0, 2); // Scroll by 2px every 100ms
                }
            }, 100);
        } else {
            // Stop scrolling when hover ends
            clearInterval(scrollInterval);
        }

        return () => clearInterval(scrollInterval); // Cleanup interval on unmount
    }, [isHovered]);

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
                    <div className='flex flex-col justify-center items-center'>
                        {/* Title */}
                        <PageTitle title="The Lotus Garden Design" className="mb-2" />
                        {/* Paragraph with max-width */}
                        <p className="max-w-[600px] text-left mb-6">
                            The Lotus Garden website features a clean, elegant design that reflects the restaurant's authentic Asian flavors and inviting atmosphere. The interactive menu showcases a variety of dishes with high-quality images and detailed descriptions, while the About Us section shares the restaurant's story and dedication to quality.
                        </p>
                    </div>
                    {/* First Image */}
                    <div className="flex flex-col justify-center items-center pb-6">
                        <Image
                            src="/assets/work/LotusGardenShowcase.png"
                            alt="Lotus Garden Showcase"
                            height={1200}
                            width={1200}
                            className="border-4 border-white"
                        />
                    </div>
                    {/* Second Image with scroll effect */}
                    <div
                        className="flex flex-col justify-center items-center w-full max-w-[600px] relative border-4 border-white"
                        onMouseEnter={() => setIsHovered(true)}  // Trigger scrolling on hover
                        onMouseLeave={() => setIsHovered(false)} // Stop scrolling on hover leave
                    >
                        <div
                            ref={imageRef}
                            className="w-full h-[600px] overflow-hidden relative" // Hide scrollbar
                            style={{ scrollBehavior: 'smooth' }} // Optional: for smooth scrolling
                        >
                            <Image
                                src="/assets/work/Lotus.png"
                                alt="Lotus Garden Showcase"
                                height={1200}
                                width={1200}
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default LotusGarden;