import React from 'react'
import Image from 'next/image'

const About = () => {
    return (
        <section>
            <div className="container mx-auto py-12">
                <div className="flex xl:flex-row flex-col justify-between items-center gap-4">
                
    
                    {/* Text Section */}
                    <div className="flex flex-col xl:order-1 order-2 justify-center items-center text-left p-6">
                        <div className='text-center xl:text-left'> 
                            <h5 className='p-6'>Professional Land & Tree Maintenance</h5>
                            <h2 className="text-left p-6 max-w-[400px]">Tree Removal Is An Easy Task</h2>
                        <p className='max-w-[600px] p-6'>Higuera's tree service is proud to serve the comunity work at competitive prices.
                            <br/>
                            <br/>
                            Since the start of our company we have strived to obtain the best quality tools so that the jobs are done to the highest standards.
                            </p>
                            <div className='p-6'>
                            <a href="#" className="button">Hover me</a>
                            </div>
                            </div>
                           
                    </div>
                        {/* Image Section */}
                    
                    <div className="flex flex-col xl:flex-row py-12 xl:order-1 order-1">
                        <Image 
                            src={'/images/tree-image-4.jpg'}
                            height={800}
                            width={600}
                            alt="Tree Image"
                            className="max-h-[700px] w-auto" 
                        />
                        
                    </div>
            
                </div>

            </div>
        </section>
      );
}

export default About