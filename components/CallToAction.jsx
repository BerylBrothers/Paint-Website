import React from 'react';
import {Button} from "../components/ui/button";

const CallToAction = () => {
    return (
        <section className='h-full bg-white overflow-hidden'>
            <div className="container mx-auto flex justify-center items-center">
                <div className='flex justify-center items-center pt-10 pb-16'>
                    {/* Set the width for mobile (w-full), medium screens (w-[90%]), and large screens (w-[700px]) */}
                    <div className='flex flex-col justify-center items-center h-[250px] w-[370px] xl:w-[600px] xl:h-[300px] px-6 rounded-xl border hero-bg border-white'>
                        <div className='flex mt-16'>
                    <h3 className='text-center'>Transform Your Vision Into Stunning Web Designs.</h3>
                    </div>
                    <div className='flex justify-center items center mt-12'>    
                        <Button variant="outline" size="lg" className="uppercase flex items-center gap-2 border-white text-white hover:bg-white hover:text-black">
                         <span>Get In Touch</span>
                        </Button>
                    </div>
                    </div>
                 
                </div>
            </div>
        </section>
    );
};

export default CallToAction;