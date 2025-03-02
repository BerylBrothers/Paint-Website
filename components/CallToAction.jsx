import React from 'react';

const CallToAction = () => {
    return (
        <section className='h-full bg-white'>
            <div className="container mx-auto flex justify-center items-center">
                <div className='flex justify-center items-center py-24'>
                    {/* Set the width for mobile (w-full), medium screens (w-[90%]), and large screens (w-[700px]) */}
                    <div className='flex justify-center items-center w-[500px] h-[300px] px-6 rounded-xl border bg-primary border-white'>
                        Call to Action
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CallToAction;