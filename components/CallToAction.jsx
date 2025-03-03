import React from 'react';
import {Button} from "../components/ui/button";

const CallToAction = () => {
    return (
        <section className='h-full bg-white overflow-hidden'>
            <div className="container mx-auto flex justify-center items-center">
                <div className='flex justify-center items-center py-24'>
                    {/* Set the width for mobile (w-full), medium screens (w-[90%]), and large screens (w-[700px]) */}
                    <div className='flex flex-col justify-center items-center h-[250px] w-[370px] xl:w-[600px] xl:h-[300px] px-6 rounded-xl border bg-primary border-white'>
                    <h3 className='text-center'>Transform Your Vision Into Stunning Web Designs</h3>
                    <div className='flex justify-center pt-6'>  <Button variant="outline" size="md" className="uppercase flex justify-center items-center gap-2 border-white text-white">
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